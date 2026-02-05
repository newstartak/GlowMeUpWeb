import { useState, useEffect, useCallback } from "react";


export default function useImageList( bucketName, folderName, count )
{
  // 금일 생성된 이미지 리스트
  const [images, setImages] = useState([]);

  // 주기적으로 저장소의 이미지 변화 체크하여 새로고침 없이 변경사항 반영
  const fetchList = useCallback(async () => {

    // 저장소에 존재하는 모든 개체
    let allItems = [];
    // 저장소에 저장된 개체가 너무 많을 경우 다음 페이지로 넘어감
    let pageToken = '';

    do {
      /*
       * 개체를 가져올 GCS 버킷 지정
       * 접두사 폴더명 지정
       * 아이템 속성 중 이름, 생성 시각, 크기 정보 가져옴
       * 다음 페이지가 존재할 경우 추가 탐색
      */
      const url = `https://storage.googleapis.com/storage/v1/b/${bucketName}/o?prefix=${folderName}/&fields=items(name,timeCreated,size,metadata),nextPageToken${pageToken ? `&pageToken=${pageToken}` : ''}`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.items) {
        allItems = allItems.concat(data.items);
      }

      pageToken = data.nextPageToken;
    } while (pageToken); // 추가 탐색할 다음 페이지가 존재할 때까지 반복

    // 유효하지 않은 데이터 거르기
    const filtered = allItems
      .filter(item => {

        // 크기가 0인 쓰레기 데이터 제거
        const isValidImg = item.size > 0;

        const itemDate = new Date(item.timeCreated);
        const now = new Date();


        // 타겟 날짜와 비교 대상 이미지 생성일 비교하여 과거 데이터 제거
        const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const startOfTomorrow = new Date(startOfToday);
        startOfTomorrow.setDate(startOfTomorrow.getDate() + 1);

        const startOfYesterday = new Date(startOfToday);
        startOfYesterday.setDate(startOfYesterday.getDate() - 1);

        const filterDate = itemDate >= startOfYesterday && itemDate < startOfTomorrow;
        // =====================================================

        return isValidImg && filterDate;
      })
      .sort((a, b) => new Date(b.timeCreated) - new Date(a.timeCreated)) // 내림차순(최신순) 정렬
      .slice(0, count);

    // 걸러진 이미지들의 url 정보 가져오기
    const urls = filtered.map(
      item => `https://storage.googleapis.com/${bucketName}/${item.name}?v=${new Date(item.timeCreated).getTime()}`
    );

    // 변동사항이 있는 경우에만 이미지 리스트 업데이트
    setImages(prev =>
    {
      if (JSON.stringify(prev) !== JSON.stringify(urls)) {
        return urls;
      }

      return prev;
    })}, []);


  useEffect(() => {

    fetchList();

    const timer = setInterval(async () => {
      fetchList();
    }, 3000);

    return () => clearInterval(timer);

  }, [fetchList]);

  return {images}
}
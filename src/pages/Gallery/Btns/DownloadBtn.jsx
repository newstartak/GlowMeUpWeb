import "./DownloadBtn.css";

export default function DownloadBtn({ selectedUrl })
{
  return (
    <a id="DownloadBtn" href={selectedUrl} download>
      DOWNLOAD
    </a>
  );
}
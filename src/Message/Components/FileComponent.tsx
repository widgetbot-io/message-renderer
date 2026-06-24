import type { APIFileComponent } from "discord-api-types/v10";
import { filesize } from "filesize";
import React from "react";
import Spoiler from "./Spoiler";
import SvgFromUrl from "../../SvgFromUrl";
import * as Styles from "./style";

interface FileComponentProps {
  file: APIFileComponent;
}

function getFileName(file: APIFileComponent): string {
  if (file.name) return file.name;

  const path = file.file.url.split("?")[0];
  return path.split("/").pop() || file.file.url;
}

function FileComponent({ file }: FileComponentProps) {
  const card = (
    <Styles.FileContainer>
      <SvgFromUrl svg="FileUnknown" width={30} height={40} />
      <Styles.FileMetadata>
        <Styles.FileName
          rel="noreferrer noopener"
          target="_blank"
          href={file.file.url}
        >
          {getFileName(file)}
        </Styles.FileName>
        {file.size !== undefined && (
          <Styles.FileSize>
            {filesize(file.size, { base: 2 }) as string}
          </Styles.FileSize>
        )}
      </Styles.FileMetadata>
      <Styles.FileDownload
        rel="noreferrer noopener"
        target="_blank"
        href={file.file.url}
      >
        <SvgFromUrl svg="IconDownload" width={24} height={24} />
      </Styles.FileDownload>
    </Styles.FileContainer>
  );

  return file.spoiler ? <Spoiler>{card}</Spoiler> : card;
}

export default FileComponent;

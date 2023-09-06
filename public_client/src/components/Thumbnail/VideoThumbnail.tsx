import styled from 'styled-components'
import { StringMappingType } from 'typescript'

const Thumb = styled.div`
    position: relative;
    width: auto;
    height: min-content;
    margin: 1.5rem 5%;
    border-radius: 0px 0px 10px 10px;
    border-radius: 1.1em;
    overflow: hidden;
    box-shadow: 0 0 4px #00000062;

    > img { width: 100%; object-fit: cover; }

    > #details {
      width: 100%;
      height: 33%;
      background-color: rgb(255 255 255 / 80%);
      backdrop-filter: blur(10px);
      box-shadow: 0px 0px 4px #00000059;
      position: absolute;
      bottom: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 0.8rem 1rem;

      > #thumb-title { 
        font-size: 1.2em;
        font-weight: bold;
      }
      > p {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }

    #meta-data {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
`;

export default function VideoTumbnail({ src, title }: { src: string, title: string }) {
  return (
    <Thumb id="video-thumb">
      
      <div id='details'>
        <p id='thumb-title'>{title}</p>
        <div id='meta-data'>
          <p>태그</p>
          <p>아이콘</p>
        </div>
      </div>

      <img src={src ? src : ''}/>
    </Thumb>
  )
}
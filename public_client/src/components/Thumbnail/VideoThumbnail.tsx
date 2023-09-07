import styled from 'styled-components'
import { StringMappingType } from 'typescript'

const Thumb = styled.div`
    position: relative;
    width: auto;
    height: min-content;
    margin: 0 5% 1.5em 5%;
    border-radius: 0px 0px 10px 10px;
    border-radius: 1.1em;
    overflow: hidden;
    box-shadow: 0px 0px 3px #0000006e;
    
    > img { width: 100%; object-fit: cover; }

    > #details {
      width: 100%;
      height: 33%;
      background-color: #ffffffe3;
      backdrop-filter: blur(5px);
      box-shadow: 0px 0px 3px #0000006e;
      position: absolute;
      bottom: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 0.8rem 1rem;

      > #thumb-title { 
        font-size: 1.2em;
        font-weight: bold;
        text-align: left;
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
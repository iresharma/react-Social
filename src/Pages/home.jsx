import styled from "styled-components";
import { useMediaQuery } from "../hooks/mediaQuery";
import { useContext } from "react";
import { useStats } from "../hooks/context";

export const Home = () => {
  const [isMobile, isTab, _] = useMediaQuery();
  let stats = useContext(useStats);
  const Parts = styled.div`
    display: flex;
    justify-content: space-evenly;
    background-color: #eee;
    padding: 0;
    margin: 0;
  `;
  const Left = styled.div`
    display: flex;
    width: 10vw;
    color: #666;
    flex-direction: column;
    padding: 2vw;
    font-size: 0.8em;
  `;
  const Center = styled.div`
    display: flex;
    width: 67vw;
    background-color: white;
    padding: 2vw;
    flex-direction: column;
  `;
  const Right = styled.div`
    display: flex;
    width: 20vw;
    color: #666;
    flex-direction: column;
    padding: 3vw;
  `;
  return (
    <Parts>
      <Left>
        {stats.totalUsers + ' Active users'} <br />
        {stats.totalPhotos + ' photos uploaded'}
      </Left>
      <Center>
        <span style={{ fontSize: '3em' }}>Feed</span>
      </Center>
      {!isTab && (
        <Right>
          <span style={{ fontSize: "1.5em" }}>About the Developer</span>
          <div style={{ marginTop: "2rem" }}>
            <img
              src="https://github-readme-stats.vercel.app/api?username=iresharma&theme=light&show_icons=true"
              display="block"
              width="100%"
              height="auto"
              alt="1"
            />
          </div>
          <div>
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=iresharma&theme=light"
              display="block"
              width="100%"
              height="auto"
              alt="3"
              align="right"
            />
          </div>
          <div>
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=iresharma&theme=light&layout=compact"
              display="block"
              width="100%"
              height="auto"
              alt="2"
            />
          </div>
          <div>
            <img
              src="https://github-readme-stats.vercel.app/api/wakatime?username=iresharma&custom_title=My%20Weekly%20Stats&layout=compact&theme=light"
              align="right"
              display="block"
              width="100%"
              height="auto"
              alt="4"
            />
          </div>
        </Right>
      )}
    </Parts>
  );
};

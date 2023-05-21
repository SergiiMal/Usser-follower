import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import { GoBackLink, ListItem } from "../components/tweetsStyled/Tweets.styled";
import { List } from "../components/usersCard/UsersCard.styled";

const Tweets = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? "/");
  const [responseData, setResponseData] = useState({});
  const { userId } = useParams();

  useEffect(() => {
    const controller = new AbortController();

    async function fetchTrending() {
      try {
        const url = new URL("https://64692db8183682d6143b6b78.mockapi.io/user");

        const response = await axios.get(`${url}/${userId}`, {
          signal: controller.signal,
        });

        setResponseData(response.data);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchTrending();

    return () => {
      controller.abort();
    };
  }, [userId]);

  return (
    <div>
      <GoBackLink to={backLinkLocationRef.current}>Go back</GoBackLink>
      <div>
        <h2>{responseData.user}</h2>
        <h3>Tweets:</h3>
        <List>
          <ListItem>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
              similique, placeat facilis explicabo, corrupti ad nesciunt
              delectus culpa dicta doloremque ipsam iure iusto aliquid
              consequatur. Quod dicta reprehenderit enim quos!
            </p>
          </ListItem>
          <ListItem>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
              similique, placeat facilis explicabo, corrupti ad nesciunt
              delectus culpa dicta doloremque ipsam iure iusto aliquid
              consequatur. Quod dicta reprehenderit enim quos!
            </p>
          </ListItem>
          <ListItem>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
              similique, placeat facilis explicabo, corrupti ad nesciunt
              delectus culpa dicta doloremque ipsam iure iusto aliquid
              consequatur. Quod dicta reprehenderit enim quos!
            </p>
          </ListItem>
          <ListItem>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
              similique, placeat facilis explicabo, corrupti ad nesciunt
              delectus culpa dicta doloremque ipsam iure iusto aliquid
              consequatur. Quod dicta reprehenderit enim quos!
            </p>
          </ListItem>
          <ListItem>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
              similique, placeat facilis explicabo, corrupti ad nesciunt
              delectus culpa dicta doloremque ipsam iure iusto aliquid
              consequatur. Quod dicta reprehenderit enim quos!
            </p>
          </ListItem>
          <ListItem>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
              similique, placeat facilis explicabo, corrupti ad nesciunt
              delectus culpa dicta doloremque ipsam iure iusto aliquid
              consequatur. Quod dicta reprehenderit enim quos!
            </p>
          </ListItem>
          <ListItem>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
              similique, placeat facilis explicabo, corrupti ad nesciunt
              delectus culpa dicta doloremque ipsam iure iusto aliquid
              consequatur. Quod dicta reprehenderit enim quos!
            </p>
          </ListItem>
          <ListItem>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
              similique, placeat facilis explicabo, corrupti ad nesciunt
              delectus culpa dicta doloremque ipsam iure iusto aliquid
              consequatur. Quod dicta reprehenderit enim quos!
            </p>
          </ListItem>
          <ListItem>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
              similique, placeat facilis explicabo, corrupti ad nesciunt
              delectus culpa dicta doloremque ipsam iure iusto aliquid
              consequatur. Quod dicta reprehenderit enim quos!
            </p>
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default Tweets;

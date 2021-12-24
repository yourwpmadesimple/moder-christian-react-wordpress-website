// File: /packages/my-first-theme/src/components/index.js

import React from "react";
import { connect, Head } from "frontity";
import Link from "@frontity/components/link";
import Switch from "@frontity/components/switch";

import GlobalCss, { Main, Button } from "../styles/GlobalCss.css";
import { Header, HeaderContent, Menu } from "../styles/HeaderCss.css";

import Loading from "./loading";
import List from "./list";
import Post from "./post";
import Page from "./page";
import Error from "./error";

const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <GlobalCss />

      <Head>
        <title>Modern Christian Theme</title>
        <meta name="description" content="Inspired by Blinkand.com" />
      </Head>

      {/**** prop isPage. This prop gets passed to a function that we add to our CSS that conditionally checks the boolean value passed in to determine what colour the border should be, i.e. either green in the case of a post or page, or maroon in the case of a list ****/}

      <Header isPostType={data.isPostType} isPage={data.isPage}>
        <HeaderContent>
          <h1>Hello Frontity</h1>

          {state.theme.isUrlVisible ? (
            <div>
              Current URL: {state.router.link}{" "}
              <Button onClick={actions.theme.toggleUrl}>&#x3c; Hide URL</Button>{" "}
            </div>
          ) : (
            <Button onClick={actions.theme.toggleUrl}>Show URL &#x3e;</Button>
          )}

          <Menu>
            <Link link="/">Home</Link>
            <Link link="/about-us">About Us</Link>
            <Link link="/destinations">Destinations</Link>
            <Link link="/regions">Regions</Link>
          </Menu>
        </HeaderContent>
      </Header>

      <hr />
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <Page when={data.isPage} />
          <Post when={data.isPost} />
          <Page when={data.isDestinations} />
          <Error when={data.isError} />
        </Switch>
      </Main>
    </>
  );
};

export default connect(Root);

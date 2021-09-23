import { Card, CardContent, CardHeader } from "@material-ui/core";
import React from "react";
import { AboutContainer } from "./StyledComponents";

const About = () => (
  <AboutContainer>
    <Card>
      <CardHeader title="Mission Statement" />
      <CardContent>
        <p>
          This application is a tool designed to make music discovery easy and
          efficient by providing the user (that's you) with controllable inputs
          and a means of saving your music directly to your library.
        </p>
        <p>
          Instead of limiting music discovery to only Spotify's Discover Weekly
          playlist and one's own effort of listening to song after song, we
          provide a means of generating selection of songs based on a set of
          parameters that can be as general or as specific as you want.
        </p>
        <p>
          As human beings, we change; but Spotify won't know this. Don't get
          stuck in a musical rut. Create your own playlist to get you in a mood,
          pump you up, calm you down, or just something to drown out the
          construction literally right outside your window.
        </p>
        <p>We're here for the vibes.</p>
      </CardContent>
    </Card>

    <Card>
      <CardHeader title="About the Developer" />
      <CardContent>
        <p>
          Joe Boylson is a web developer working in Cincinnati, OH. He shoots
          film photography and works on passion projects (like this) in his free
          time.
        </p>
        <p>
          To contact him about issues with this application, about feature
          requests, or anything else, use the links below:
        </p>
        <a href="mailto:joeboylson@gmail.com">Send Joe an Email</a>
        <a href="https://www.instagram.com/jobo.jpg/">Instagram (@jobo.jpg)</a>
      </CardContent>
    </Card>
  </AboutContainer>
);

export default About;

import styled from "styled-components";
import Drawer from "@material-ui/core/Drawer";

export const ArtistSelectDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    width: 320px !important;
  }
`;

export const SelectedTrackWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 24px;
  gap: 12px;

  button {
    width: 24px;
    height: 24px;
  }
`;
import React from "react";
import { DemoAppShell, DemoMuiTheme } from "@project/ui-components";
import { ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import "@storybook/addon-console";

const Container = styled.div`
  width: 98vw;
  height: 98vh;
`;

export default { title: "Demo AppShell", component: DemoAppShell };

const handleUserButtonClick = () => {
  console.log("User button clicked!");
};

const handleHomeClick = () => {
  console.log("Home Menu Item clicked!");
};

const handleMyAccountClick = () => {
  console.log("My Account Menu Item clicked!");
};

const handleMyProfileClick = () => {
  console.log("My profile Menu Item clicked!");
};

export const withFullWidth = () => {
  return (
    <Container>
      <DemoAppShell
        appBarTitle="My Cool App"
        appBarUserBtnLabel="john.doe@foo.com"
        onAppBarUserBtnClick={handleUserButtonClick}
        onHomeItemClicked={handleHomeClick}
        onMyAccountItemClicked={handleMyAccountClick}
        onMyProfileItemClicked={handleMyProfileClick}
      />
    </Container>
  );
};

export const withDemoMuiTheme = () => {
  return (
    <ThemeProvider theme={DemoMuiTheme}>
      <Container>
        <DemoAppShell
          appBarTitle="My Cool App"
          appBarUserBtnLabel="john.doe@foo.com"
          onAppBarUserBtnClick={handleUserButtonClick}
          onHomeItemClicked={handleHomeClick}
          onMyAccountItemClicked={handleMyAccountClick}
          onMyProfileItemClicked={handleMyProfileClick}
        />
      </Container>
    </ThemeProvider>
  );
};

const DemoContent = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>Demo Content Page</Typography>
      <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus
        non enim praesent elementum facilisis leo vel. Risus at ultrices mi
        tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non
        tellus. Convallis convallis tellus id interdum velit laoreet id donec
        ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl
        suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod
        quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet
        proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras
        tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum
        varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt.
        Lorem donec massa sapien faucibus et molestie ac.
      </Typography>
      <Typography paragraph>
        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
        ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum
        integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi
        lacus sed viverra tellus. Purus sit amet volutpat consequat mauris.
        Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
        vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra
        accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac.
        Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique
        senectus et. Adipiscing elit duis tristique sollicitudin nibh sit.
        Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra
        maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
        aliquam ultrices sagittis orci a.
      </Typography>
    </>
  );
};

export const withContentAndTheme = () => {
  return (
    <ThemeProvider theme={DemoMuiTheme}>
      <Container>
        <DemoAppShell
          appBarTitle="My Cool App"
          appBarUserBtnLabel="john.doe@foo.com"
          onAppBarUserBtnClick={handleUserButtonClick}
          onHomeItemClicked={handleHomeClick}
          onMyAccountItemClicked={handleMyAccountClick}
          onMyProfileItemClicked={handleMyProfileClick}
        >
          <DemoContent />
        </DemoAppShell>
      </Container>
    </ThemeProvider>
  );
};

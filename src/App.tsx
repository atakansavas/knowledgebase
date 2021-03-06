import React from 'react';
import { ThemeProvider } from "./_metronic";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import { LastLocationProvider } from "react-router-last-location";
import Error from './app/views/Error/Error';
import Layout from './app/partials/layout/Layout';
import { AppContextProvider } from './app/contexts/Layout/Index';

function App() {
  return (

    <AppContextProvider >

      <BrowserRouter basename={""}>
        {/*This library only returns the location that has been active before the recent location change in the current window lifetime.*/}
        <LastLocationProvider>
          {/* Provide Metronic theme overrides. */}
          <ThemeProvider>

            {/* Render routes with provided `Layout`. */}
            <Switch>
              {
                /* Redirect from root URL to /dashboard. */
                <Redirect exact from="/" to="/home" />
              }
              <Route path="/error" component={Error} />

              <Layout></Layout>

            </Switch>
          </ThemeProvider>
        </LastLocationProvider>
      </BrowserRouter>

    </AppContextProvider>

  );
}

export default App;

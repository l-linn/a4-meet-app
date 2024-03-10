# Project: Meet App

## Objectives

To build a serverless, progressive web application (PWA) with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.

## Serverless Functions

The app will use serverless functions to authenticate users and authorise the user to access the data from Google Calendar API.

Functions included:

-   getAuthURL

When this function is invoked, an authorization URL is returned, and Google displays a consent screen to the user to authorize the app via an authorization code.

-   getAccessToken

The authorization code received from ‘getAuthURL’ is passed to getAccessToken. Google subsequently provides the Meet app with a temporary access token.

-   getCalendarEvents

This is the function that your Meet app will use to request calendar events (by attaching the access token to the request).

## Key Features

**1. Filter Events by City**

-   User Story: As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city.

_Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities._

      Given user hasn’t searched for any city;

      When the user opens the app;

      Then the user should see a list of upcoming events.

_Scenario 2: User should see a list of suggestions when they search for a city._

      Given the main page is open;

      When user starts typing in the city textbox;

      Then the user should receive a list of cities (suggestions) that match whatthey’ve typed.

_Scenario 3: User can select a city from the suggested list._

      Given user was typing “Berlin” in the city textbox AND the list of suggested cities is showing;

      When the user selects a city (e.g., “Berlin, Germany”) from the list;

      Then their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.

**2. Show/Hide Event Details**

-   User Story: As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.

_Scenario 1: An event element is collapsed by default._

      Given a user opened the events app

      When the user views an event element

      Then the event details will be collapsed

_Scenario 2: User can expand an event to see details._

      Given the event details were hidden;

      When user clicks a show more button;

      Then more information will show up on the screen.

_Scenario 3: User can collapse an event to hide details._

      Given the event details were shown;

      When user clicks a show less button;

      Then the infomation box will fold up and less information show on the screen.

**3. Specify Number of Events**

-   User Story: As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.

_Scenario 1: When user hasn’t specified a number, 32 events are shown by default._

      Given a user opened the events app;

      When the user hasn't specified a number;

      Then 32 events will shown by default.

_Scenario 2: User can change the number of events displayed._

      Given a user opened the events app;

      When the user chooses to change the number of events displayed;

      Then the user should be able to specify a new number of events, and the app should display the specified number of events.

**4. Use the App When Offline**

-   User Story: As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.

_Scenario 1: Show cached data when there’s no internet connection._

      Given the events app had cached data, and the device was offline;

      When the user opens the events app;

      Then the app should display the cached data.

_Scenario 2: Show error when user changes search settings (city, number of events)._

      Given the events app was opened, and the device was offline;

      When the user attempts to change search settings such as city or number of events;

      Then the app should display an error message indicating that the changes cannot be made while offline.

**5. Add an App Shortcut to the Home Screen**

-   User Story: As a user, I would like to be able to add the app shortcut to my home screen so that I can open the app faster.

_Scenario 1: User can install the meet app as a shortcut on their device home screen._

      Given the meet app was installed on the user's device;

      When the user selects the option to add a shortcut to the home screen;

      Then the meet app should be added as a shortcut on the device home screen.

**6. Display Charts Visualising Event Details**

-   User Story: As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organised in which city.

_Scenario 1: Show a chart with the number of upcoming events in each city._

      Given the user opens the events app;

      When the user selects to view event details visualization;

      Then the app should display a chart, and the chart should show the number of upcoming events in each city.

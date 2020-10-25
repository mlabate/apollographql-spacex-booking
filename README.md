# SpaceX Launch Reservation App

This is an interactive app for reserving a seat on an upcoming SpaceX launch.  🚀

Think of it as an Airbnb for space travel! All of the data is real, thanks to the [SpaceX-API](https://github.com/r-spacex/SpaceX-API).

The app includes the following views:

- A login page
- A list of upcoming launches
- A detail view for an individual launch
- A user profile page
- A cart

To populate these views, the app's data graph will connect to two data sources: a REST API (from SpaceX) and a SQLite database (this is because the SpaceX API is a read-only data source for fetching launch data, so we also need a writable data source that allows us to store application data, such as user identities and seat reservations).

Here's what the finished app will look like:

![Alt text](space-explorer.png "Space Explorer")

## File structure

The app is split out into two folders:

- `client`: ...
- `server`: ...

## Installation

To run the app, run these commands in two separate terminal windows from the root:

```bash
cd server && npm i && npm start
```

and

```bash
cd client && npm i && npm start
```

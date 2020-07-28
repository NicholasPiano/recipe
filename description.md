# Recipe app

## Contents

1. Technologies used
2. Data cycle
3. Interface design

## Technologies used

1. Redux

State management is done with Redux. This allows the results of requests to be organised in a consistent manner. A custom hook (`useQuery`) was written to control this cycle.

2. Semantic UI

Semantic UI was used for interface elements.

3. Lodash

Used for certain utility functions.

4. Node forge

Used to hash request to provide a persistent ID.

5. Redux saga

Used for side effects triggered by changes to the Redux state. When certain actions are dispatched, a `fetch` call can be sent out with the corresponding action payload.

## Data cycle

The data cycle is controlled by the `useQuery` hook. Based on the input parameters, the hook either returns currently cached data or registers a request to be sent to the API. This allows for a very intuitive use of request data "in-place".

The API cannot be accessed directly due to their outdated CORS policy. To work around this, the heroku CORS proxy was used, found here: https://cors-anywhere.herokuapp.com/

## Interface design

The interface was divided into two parts: the search bar and the detail section. The search bar contains fields for a string query and a list field for ingredients. The page parameter is controlled by the scrolling action of the list. Scrolling to the bottom of the list will increment the page. All previously rendered data will be preserved by simply rendering all pages as a range.

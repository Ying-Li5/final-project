# Game Library

## 🌸 **Table of Content**

1. [About The Project](#🌸-about-the-project)
2. [Demo](#🌸-demo)
3. [Routes](#🌸-routes)
4. [Getting Started](#⚡-getting-started)
5. [Technologies](#🌸-technologies)
6. [Future Additions](#✨-future-additions)
7. [Issues](#❗-issues)
8. [References](#🌸-references)

## 🌸 **About The Project**

Game Library is a MERN Stack application project for my last capstone.

Game Library allows user to navigate through the current games listed on the webpage. Upon entering user will see the home page will will include:

* Navigation bar
* Aside contents
* Main contents.

Part of the navigation bar is routed and will take user to page.

* Home → home page
* User → user page (not finished)
* Log in → log in page (not finished)

On the home page, user will be able to choose a game that they want more information on and click on the button provided at the bottom of the card. When clicked the website will redirect the user to the game page where the users will get information such as:

* Game title
* Game description
* Game rating
* Game release date
* Add review form
* Review display

The user will be able to create a review and it will be displayed under the form. Keep in mind that the review will be sorted from Oldest to Newest so, if the user want to see their review without scrolling they can click on the sort button and it will reorder the review.

## 🌸 **Demo**

* The application is currently deployed using [Vercel](https://game-library-fe.vercel.app/home)

## 🌸 **Routes**

### Game Controllers

| Method  | Path        | Purpose               |
| :-----  | :---------- | :-------------------- |
| GET     | `/`         | Get game information  |
| GET     | `/:game_id` | Get games by ID       |

### Reviews Controllers

| Method | Path             | Purpose                   |
| :----- | :--------------- | :------------------------ |
| POST   | `/`              | Create review             |
| GET    | `/:review_id`    | Get review by reveiw's ID |
| GET    | `/game/:game_id` | Get review by game's ID   |

## 🌸 **Databases**

### Games

| Field         | Type   | Note                          |
| :------------ | :----- | :---------------------------- |
| description   | string | Short description of the game |
| average_score | number | Game's average score          |
| title         | string | Game's title                  |
| year          | string | Release date of game          |
| art           | date   | Game's image                  |

### Reviews

| Field     | Type   | Notes                                               |
| :-------- | :----- | :-------------------------------------------------- |
| username  | string | Name of the comment's writer                        |
| score     | number | Each comment is rated on a scale of 1-10            |
| game_id   | string | Individual game id to for BE purpose                |
| title     | string | Title of the game                                   |
| content   | string | Description of the commenter's thoughts on the game |
| createdAt | date   | Not display on web                                  |

## ⚡ **Getting Started**

### Cloning the repository

To clone the repository -- make sure that *(your-username)* is the same as your **Github username**:

 ```shell
git clone https://github.com/Ying-Li5/final-project
```

Go into the repository:

```shell
 cd final-project
```

Open code file:

```shell
code .
```

### Installing dependencies

Go into the frontend and backend folder and install dependencies:

```shell
cd frontend/ (or cd /backend)

npm init -y 

npm install
```

### Starting the application

In order for the applicaiton to function properly you must run **both** the *frontend* and *backend* the following steps will guide you on how to run it.

Go into the frontend folder and run the frontend server:

```shell
cd frontend/

npm start
```

Go into the frontend folder and run the backened server:

```shell
cd backend/

npm start
```

## 🌸 **Technologies**

### Frontend

* `@testing-library/jest-dom`
* `@testing-library/react`
* `@testing-library/user-event`
* `bootstrap`
* `react`
* `react-bootstrap`
* `react-bootstrap-icons`
* `react-dom`
* `react-icons`
* `react-router-dom`
* `react-scripts`
* `web-vitals`

### Backend

* `axios`
* `cors`
* `express`
* `dotenv`
* `mongoose`

## ❗ **Issues**

* Ran into issues with the Steam API which was a little complicated due to the promises and the bulkSave and obtained help
* Ran into BE deployment with vercel

## ✨ **Future Additions**

* Add user page functionality -- user profile datas should be displayed here (the 'User' button will take you to an basic layout of the userpage).
* Add login functionality -- allows user to log into their particular profile  (the 'Login' button will take you to the login form, though it is not funcitonal).
* Include more APIs to allow better (or more) access to games that are not just located in my library.
* I want the game to include more information on the GameDisplay page such as the developer and publisher (at the time Steam did not provide it).
* Make the Home Page aside works -- because it may link others to different types of games that fits into that categories
* Implement DELETE and EDIT function for reviews
* Make pages for the review and display around 10 reviews at a time

## 🌸 **References**

* [W3School](https://www.w3schools.com/)
  * [Nav with search](https://www.w3schools.com/howto/howto_css_searchbar.asp)
  * [Avatar](https://www.w3schools.com/howto/howto_css_image_avatar.asp)

* [Steam API Documentation](https://steamcommunity.com/dev)

* [Icons](https://react-icons.github.io/react-icons/search?q=list)

* [Color Encyclopedia](https://www.colorhexa.com/)

* [Responsive Page](https://www.youtube.com/watch?v=68O6eOGAGqA&ab_channel=AngelaDesign)

* [Button CSS](https://codepen.io/t_afif/pen/VwxbdpV)

* [Current Date](https://www.freecodecamp.org/news/javascript-get-current-date-todays-date-in-js/#:~:text=In%20JavaScript%2C%20we%20can%20easily,%2C%20time%2C%20and%20time%20zone.)

* [Compare Dates](https://stackoverflow.com/questions/492994/compare-two-dates-with-javascript)

* [Dates on Mongo](https://www.prisma.io/dataguide/mongodb/working-with-dates#:~:text=The%20MongoDB%20Date%20and%20Timestamp%20types,-The%20DATE%20type&text=The%20BSON%20Date%20type%20is,(Jan%201%2C%201970).)

* [GitHub Emojis](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md)

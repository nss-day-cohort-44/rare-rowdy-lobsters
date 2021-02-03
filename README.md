# Rare: The Publishing Platform for the Discerning Writer

## **Description**
Rare is a publishing platform and social application that allows authenticated users to interact in a social forum by creating posts, associated tags and categories to their posts for relevance and filtering, and create comments on each other’s posts in order to interact directly with each other.
 
 
## **Features**
* Users can create Posts to share their thoughts in a public forum.
* Users can create, edit, and delete Tags and Categories to a Post in order to better classify their Posts. Both Tags and Categories can be managed on individual posts or as list views that include the same capabilities.
* Users can create, edit, and delete Comments on their Posts and other user’s Posts in order to take part in a discussion regarding the post.
* Users have the capability to view all of their Posts as a list, or view Posts by all users as a list.
* Admins can approve or delete Author posts before posts are displayed
* Users can search posts by title 
* Users can sort posts by category

## **Setup Client Server**
 
### Pull down the Client-Side Repo. 
 
>Note: This project is meant to run simultaneously with the Server-Side Repo found here: https://github.com/nss-day-cohort-44/rare-server-rowdy-lobsters*  
>Depending on which repo you start with, you may already have the following directories set up. 
>This project requires Python
 
### To Begin installing the Client-Side Repo, complete the following steps: 
 
1. Create a directory from which to deploy the application. 	
```mkdir RARE```
 
2. Within RARE, create two sub-directories, CLIENT and SERVER 

```mkdir CLIENT```
```mkdir SERVER```

3.   Navigate into the CLIENT sub-directory. 
```cd CLIENT```

4.   Enter the following commands: 

```git clone git@github.com:nss-day-cohort-44/rare-rowdy-lobsters.git .```        _note the single dot preceded by a single space_
		
```npm install``` 
 
```npm start```
 
## **Technologies Used**
This application was built using the React JavaScript library, and was bootstrapped with create-react-app. The only package used in the production site outside of those provided by create-react-app was react-router-dom.
The API server is powered by SQLite, watchgod and Python.
All styling was accomplished with vanilla CSS3 written by us.

## Planning Links
1. [ERD](https://dbdiagram.io/d/5f885a013a78976d7b77cb74)
1. Wireframe: provided by team lead

## Authors
[Devin Kent](https://github.com/dalamcd)
[Mario Campopiano](https://github.com/mcampopiano)
[Will Bishop](https://github.com/billwishop)
[David Williams](https://github.com/dwilliams91)
[Jasmin Kaset](https://github.com/jkaset)


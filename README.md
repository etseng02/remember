## Remember (WORK IN PROGRESS)

A flashcard application used to help commit knowledge into long term memory. Users are required to create decks. Users can add and remove cards from the deck. Users can enter a study mode to test their knowledge of cards in the deck. The application will determine the next timestamp that the user needs to study each flash card depending on the results. Cards that the user answers incorrectly will have a more frequent interval and the cards that the users answers correctly will have a longer interval. Knowledge that the user frequently gets incorrectly will be reminded at a shorter interval to commit that knowledge to long term memory.

### Completed:
* Redux Store and Reducers
* React Nagivaton 
* Deck List View Screen
* Deck Details View 
* Add Deck Feature
* Add Card Feature
* Redux Persist
* Delete card
* Delete deck
* Free Study Mode

### Features in Progress:
* Study mode (Testing user on cards and calculating next study interval)
* Syncing to server with authentication

## Getting Started

1. Install Expo using npm install -g expo-cli
2. cd frontend
3. npm start
4. Open iOS Simulator
5. Run expo on iOS simulator in the brower

## Requirements
Latest Version of xcode for iOS Simulator

## Current Product

Main deck list screen. all decks will show here. Japanese is the only deck on that screen.

!["Main Deck Screen"](https://github.com/etseng02/remember/blob/master/Docs/1.png)

Using a swipe festure, a delete button from the side to delete the deck.
!["Main page"](https://github.com/etseng02/remember/blob/master/Docs/2.png)

Deck view options, enhanced study, free study, edit cards and add new card can be accessed from this menu.
!["Main page"](https://github.com/etseng02/remember/blob/master/Docs/3.png)

Edit cards feature shows a the list of cards to edit or delete.
!["Main page"](https://github.com/etseng02/remember/blob/master/Docs/4.png)

Free study mode creates an infinite loop of random cards from the selected deck.
!["Main page"](https://github.com/etseng02/remember/blob/master/Docs/5.png)
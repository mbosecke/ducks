# About

A simple application to understand how ducks are being 
fed in parks around the world. 

# Organization

The project is divided into two subprojects:

* ducks-frontend: A react based frontend.
* ducks-app: A spring/java based backend.


# Future Wishlist

* Autocomplete for the "food" input to help normalize the data.
* A method to normalize the "location" input (autocomplete or location API).
* User interface for reporting.
* More testing of mobile support.
* More testing of accessibility support.

# Building
```
./gradlew clean build
```

# Running tests

Frontend:
```
cd ducks-frontend
npm test
```

Backend:
```
./gradlew :ducks-app:test
```
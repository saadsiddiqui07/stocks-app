# React Native Stocks Listing App

<img width="694" alt="Screenshot 2024-05-11 at 1 57 25 AM" src="https://github.com/saadsiddiqui07/stocks-app/assets/53810119/0230236b-c6fa-447d-8aea-0e7f8ed11dbd">

### Splash Screen
- Implemented a standard splash screen behavior for iOS and Android.

### Login Screen
- Created a login screen enabling users to log in with their email and password.
- Utilized Redux for global state management to efficiently handle login and logout functionalities.
- Implemented regex validation for email input to ensure proper formatting.
- Added a barrier to ensure both email and password credentials are present before allowing login.

### Main Screen
- Implemented a main screen featuring a scrollable sheet.
- Revealed the search bar upon scrolling up.
- Displayed stock cards with pagination, showing 5 stocks per page.
- Dynamically updated the stock list based on user search input by using `debounce` method to call the API optimally.
- Utilized the Real Time Finance API with trend type as GAINER.
- Enabled long pressing of stock cards to display their descriptions.
- Implemented navigation to the stock detail page upon clicking a stock card.

### Stock Details Screen
- Created a stock details screen displaying basic stock information.
- Provided an option to add stock orders.
- Redirected users to the Orders Screen upon adding an order.

### Orders Screen
- Developed an orders screen listing all added stocks.
- Allowed users to remove a stock by clicking the delete button.
- Implemented a swipe-to-buy button to place orders.
- Sent push notifications upon successful order placement, displaying a success state to the user.
  
## Implementation Details
- Utilized React Native for app development, incorporating best practices and clean architecture.
- Integrated Notifee for push notification functionality.
- Employed Redux for global state management to handle user authentication and stock orders.
- Optimized API requests for efficient search functionality.

## Assumptions Made
- Utilized static stock images if unavailable in the API.
- Opted for an optimal search API call by waiting for the user to stop typing before making the request.

## Tech Stack
- React Native
- React Navigation
- Redux for State Management
- Notifee for Local Push Notifications
- React Native Reanimated


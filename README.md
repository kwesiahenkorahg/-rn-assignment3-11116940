# Task Manager App

## Description
The Task Manager app is designed to help users manage and track their daily tasks efficiently. The app categorizes tasks and displays them in a user-friendly interface. 

## Components

### 1. `Header.js`
- **Usage**: Displays a greeting to the user and shows the number of tasks for the day. Includes an icon for user profile.
- **Props**: None

### 2. `SearchBar.js`
- **Usage**: Provides a search input field for users to search through tasks.
- **Props**: None

### 3. `CategoryCard.js`
- **Usage**: Represents a task category card with an image, title, and number of tasks.
- **Props**:
  - `title`: The title of the category (e.g., Exercise, Study).
  - `tasks`: The number of tasks in this category.
  - `imageUri`: The image associated with the category.

### 4. `TaskCard.js`
- **Usage**: Displays individual ongoing tasks in a list.
- **Props**:
  - `task`: The description of the task.

## Screenshots

### Home Screen
![photo_2024-06-02_18-22-26](https://github.com/kwesiahenkorahg/rn-assignment3-11116940/assets/170183906/e38018ff-1ef6-4711-8599-9f7a5d4a736b)



### Categories
![photo_1_2024-06-02_18-29-51](https://github.com/kwesiahenkorahg/rn-assignment3-11116940/assets/170183906/0f508a47-43da-4b47-a5fa-57708717f1e7)
![photo_2_2024-06-02_18-29-51](https://github.com/kwesiahenkorahg/rn-assignment3-11116940/assets/170183906/0b117cae-cdad-4ec0-9730-de6f31bd639a)
![photo_3_2024-06-02_18-29-51](https://github.com/kwesiahenkorahg/rn-assignment3-11116940/assets/170183906/d3495742-68f2-4e01-87e9-9e5a91ac4d0e)
![photo_4_2024-06-02_18-29-51](https://github.com/kwesiahenkorahg/rn-assignment3-11116940/assets/170183906/4da23660-d391-48d4-a004-4c8c6a09e818)



### Tasks
![photo_2024-06-02_18-22-32](https://github.com/kwesiahenkorahg/rn-assignment3-11116940/assets/170183906/1bf9eda0-7b3d-44ef-a244-dad65c4b8bd9)


## Project Structure

```
TaskManager/
├── assets/
│   ├── exercise.png
│   ├── study.png
│   ├── code.png
│   ├── cook.png
│   ├── read.png
│   ├── travel.png
│   ├── meditate.png
│   ├── play.png
├── components/
│   ├── CategoryCard.js
│   ├── Header.js
│   ├── SearchBar.js
│   ├── TaskCard.js
├── App.js
├── MainScreen.js
```

## Getting Started

### Prerequisites
- Node.js
- Expo CLI

### Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd <repository_name>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the project:
   ```bash
   npm start
   ```

4. Scan the QR code with your Expo Go app to view the app on your mobile device.

# Region Map

An interactive USA regional map application that allows users to select and visualize different regions of the United States.

## Features

- **Interactive Map**: Click on region buttons to highlight states across five US regions:
  - **West**: Alaska, Arizona, California, Hawaii, Idaho, Nevada, Oregon, Utah, Washington
  - **Central**: Colorado, Kansas, Nebraska, New Mexico, North Dakota, Montana, Oklahoma, South Dakota, Texas, Wyoming
  - **Midwest**: Arkansas, Illinois, Indiana, Iowa, Kentucky, Michigan, Minnesota, Missouri, Tennessee, Wisconsin
  - **South**: Alabama, Florida, Georgia, Louisiana, Mississippi, North Carolina, South Carolina
  - **East**: Connecticut, Delaware, Maine, Maryland, Massachusetts, New Hampshire, New Jersey, New York, Ohio, Pennsylvania, Rhode Island, Vermont, Virginia, West Virginia, District of Columbia

- **Visual Feedback**: States change color on hover and when selected
- **Toggle Selection**: Click buttons to toggle region selection on/off

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (jQuery)
- **Mapping Library**: [JQVMap](https://github.com/manifestinteractive/jqvmap) - jQuery plugin for vector maps
- **Backend**: Python 3 (simple HTTP server)

## Project Structure

```
├── index.html      # Main HTML file with region buttons and map container
├── script.js       # jQuery logic for region selection and map interaction
├── style.css       # Styling for map and UI elements
├── server.py       # Python HTTP server for local development
├── README.md       # This file
└── LICENSE         # Project license
```

## Getting Started

### Prerequisites

- Python 3.6 or higher
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required for the server

### Installation

1. Clone or download this repository:
   ```bash
   git clone <repository-url>
   cd region-map
   ```

2. No installation needed - all dependencies are loaded from CDN

### Running the Server

Start the development server:

```bash
python3 server.py
```

The server will start at `http://localhost:8000/`

Then open your browser and navigate to:
```
http://localhost:8000/
```

## Usage

1. Open the application in your browser
2. Click on any region button (West, Central, Midwest, South, or East) to highlight all states in that region
3. The selected states will be displayed in green
4. Click the same button again to deselect the region
5. Hover over states to see additional visual feedback

## Color Scheme

- **Background**: Light gray (#fafafa)
- **Default State**: Gray (rgb(115, 115, 115))
- **Hover State**: Light green (#9fcb80)
- **Selected State**: Dark green (rgb(116, 176, 74))

## Server Details

The `server.py` file implements a simple HTTP server that:
- Serves static files from the current directory
- Suppresses noisy BrokenPipeError exceptions
- Only logs successful HTTP 200 requests
- Gracefully handles shutdown with Ctrl+C

## Browser Compatibility

This application works with:
- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

See [LICENSE](LICENSE) file for details.

## Contributing

Feel free to submit issues and enhancement requests!

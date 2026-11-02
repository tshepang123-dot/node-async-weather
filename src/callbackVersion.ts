// A function that simulates a slow request (like an API call)
function getWeather(callback: (error: Error | null, data?: string) => void): void {
  console.log("Fetching weather...");

  setTimeout(() => {
    const success = false; // change to true to test the success case

    if (success) {
      callback(null, "Johannesburg: 24°C, sunny");
    } else {
      callback(new Error("Weather request failed"));
    }
  }, 1000);
}

// Call it and pass in a callback
getWeather((error, data) => {
  if (error) {
    console.log("❌ Error:", error.message);
    return;
  }
  console.log("✅ Weather:", data);
});

console.log("This prints first, because getWeather is async");
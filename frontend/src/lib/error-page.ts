export function renderErrorPage(): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>FoodPilot</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <h1>FoodPilot</h1>
        <p>Something went wrong while loading the application.</p>
      </body>
    </html>
  `;
}
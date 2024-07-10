# playwrightG2A
Preconditions:
    Installed node js
    Installed docker 
    After instalation run those commands:

    npm install --force
    npx playwright install --with-deps

Local run tests in headed mode (default parameter is saved in .env file): 

    npx playwright test --project chromium-global --headed

Locan run tests with parametrized product
Note! Enviroment parameters do not working on powershell.exe and cmd.exe (Windows), you should use bash terminal

    SEARCH_ITEM="item name" npx playwright test --project chromium-global --headed  

Local run report:

    npx playwright show-report

Build docker container from Dockerfile:

    docker build -t test-container .

Run docker container:

    docker run -it test-container

Headed mode in docker terminal:

    xvfb-run -a SEARCH_ITEM='diablo4' npx playwright test --project chromium-global --headed

Headed mode in docker compose CLI run:

    SEARCH_ITEM="diablo 4 pc" docker-compose up --build
    
    Tests results will be available in ./playwright-report/index.html file

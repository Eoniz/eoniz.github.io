import React from 'react';

import commands from '../../components/terminal/commands/commands';
import Terminal from '../../components/terminal';

const welcomeMessage = `
*********************************************************************************************************
*   ____  ____  _______ ____ _____ ____   _____  ___         ___    ____  ______  __ __   ____  ____    *                                                  
*  /    ||    \\|       ||    / ___/|    ||   __]|    \\      |   \\  /    ||      ||  |  | /    ||    \\   *                                                      
*  |  o  ||  D  )      | |  (   \\_  |  | |  [_  |  _  |    |  _  ||  o  ||      ||  |  ||  o  ||  _  |  *                                                   
*  |     ||    /|_|  |_| |  |\\__  | |  | |   _] |  |  |    |  |  ||     ||_|  |_||  _  ||     ||  |  |  *                                                   
*  |  _  ||    \\  |  |   |  |/  \\ | |  | | [__  |  |  |    |  |  ||  _  |  |  |  |  |  ||  _  ||  |  |  *                                                    
*  |  |  ||  .  \\ |  |   |  |\\    | |  | |    | |  |  |    |  |  ||  |  |  |  |  |  |  ||  |  ||  |  |  *                                                    
*  |__|__||__|\\_| |__|  |____|\\___||____||____| |__|__|    |__|__||__|__|  |__|  |__|__||__|__||__|__|  *
*********************************************************************************************************                                                  

Welcome to my resume
Here, you'll find anything about me. To start, you can type {#FFCB6B}help{/#FFCB6B} command
There are hidden commands 👀 Feel free to find them 🕵️‍♂️
`;

const App = () => {
    return (
        <div className="root">
            <Terminal
                promptLabel="me@resume:~$ "
                commands={commands}
                welcomeMessage={welcomeMessage}
            />
        </div>
    );
};

export default App;

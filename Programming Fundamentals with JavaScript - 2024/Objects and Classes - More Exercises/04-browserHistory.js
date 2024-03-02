function browserHistory(browserInfo, actions) {

    let [browserName, openTabs, recentlyClosed, browserLog] = Object.keys(browserInfo);

    for (let command of actions) {
        let firstSpaceIdx = command.indexOf(' ');
        let tempCommand = command.substring(0, firstSpaceIdx);
        let tabName = command.substring(firstSpaceIdx + 1);

        if (tempCommand === 'Open') {
            browserInfo[openTabs].push(tabName);
            browserInfo[browserLog].push(`${tempCommand} ${tabName}`)

        } else if (tempCommand === 'Close') {
            if (browserInfo[openTabs].includes(tabName)) {
                let curTabIdx = browserInfo[openTabs].indexOf(tabName);

                browserInfo[openTabs].splice(curTabIdx, 1);
                browserInfo[recentlyClosed].push(tabName);
                browserInfo[browserLog].push(`${tempCommand} ${tabName}`)
            }
        } else {
            browserInfo[openTabs] = [];
            browserInfo[recentlyClosed] = [];
            browserInfo[browserLog] = [];

        }
    }
    console.log(`${browserInfo[browserName]}`);
    console.log(`Open Tabs: ${browserInfo[openTabs].join(', ')}`);
    console.log(`Recently Closed: ${browserInfo[recentlyClosed].join(', ')}`);
    console.log(`Browser Logs: ${browserInfo[browserLog].join(', ')}`);
}
browserHistory({
    "Browser Name": "Google Chrome",
    "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
},
    ["Close Facebook", "Open StackOverFlow", "Open Google"]
);
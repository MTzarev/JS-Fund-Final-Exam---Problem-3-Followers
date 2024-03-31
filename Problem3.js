function problemFollowers(input) {
    
        let followers = {};
    
        for (let line of input) {
            if (line === "Log out") {
                break;
            }
    
            let [command, userName, value] = line.split(": ");
    
            switch (command) {
                case "New follower":
                    if (!followers.hasOwnProperty(userName)) {
                        followers[userName] = { likes: 0, comments: 0 };
                    }
                    break;
                case "Like":
                    if (!followers.hasOwnProperty(userName)) {
                        followers[userName] = { likes: parseInt(value), comments: 0 };
                    } else {
                        followers[userName].likes += parseInt(value);
                    }
                    break;
                case "Comment":
                    if (!followers.hasOwnProperty(userName)) {
                        followers[userName] = { likes: 0, comments: 1 };
                    } else {
                        followers[userName].comments += 1;
                    }
                    break;
                case "Blocked":
                    if (followers.hasOwnProperty(userName)) {
                        delete followers[userName];
                    } else {
                        console.log(`${userName} doesn't exist.`);
                    }
                    break;
            }
        }
    
        let sortedFollowers = Object.keys(followers).sort((a, b) => {
            let totalA = followers[a].likes + followers[a].comments;
            let totalB = followers[b].likes + followers[b].comments;
            return totalA - totalB;
        });
    
        console.log(`${sortedFollowers.length} followers`);
        for (let follower of sortedFollowers) {
            console.log(`${follower}: ${followers[follower].likes + followers[follower].comments}`);
        }
        console.log();
    }

problemFollowers(["Like: Katy: 3",
"Comment: Katy",
"New follower: Bob",
"Blocked: Bob",
"New follower: Amy",
"Like: Amy: 4",
"Log out"])
;
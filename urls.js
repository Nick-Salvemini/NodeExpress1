const fs = require('fs');
const lineReader = require('line-reader');
const axios = require('axios');

try {
    lineReader.eachLine(process.argv[2], (line) => {
        axios.get(line).then(function (resp) {
            const parsedUrl = new URL(resp.config.url);
            const hostName = parsedUrl.hostname;

            fs.writeFileSync(`./${hostName}`, resp.data);
            console.log(`Wrote to ${hostName}`)
        }).catch((error) => {
            if (error) {
                console.log(`Couldn't download ${line}`)
            }
        });
    })

} catch (error) {
    console.error(error);
    process.exit(1);
}
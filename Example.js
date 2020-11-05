var mqtt = require("mqtt");


// Enter Your Project Credentials Here
const username = "username_here";
const projectName = "projectName_here";
const pass = "device_credentials_here";


// Write Your App Logic Here
const handleResponse = (query) => {
  if (query == "hi") return "sup";
};




const outName = projectName + "@" + username;
const project_topic = projectName + "/" + username;

var client = mqtt.connect("mqtt://thingesp.siddhesh.me:1893", {
  clientId: outName,
  username: outName,
  password: pass,
});

client.on("connect", () => {
  client.subscribe(project_topic, () => console.log("connected!"));
  client.on("message", (topic, message) => {
    try {
      const _msg = message.toString();
      console.log(_msg);
      const msg = JSON.parse(_msg);
      if (msg.action == "query") {
        const out = handleResponse(msg.query) ?? "Invalid Command..";
        const outMsg = {
          msg_id: msg.msg_id,
          action: "returned_api_response",
          returned_api_response: out,
        };
        client.publish(project_topic, JSON.stringify(outMsg));
      }
    } catch (error) {
      console.log(error);
    }
  });
});
client.on("error", (err) => console.log("connection failed!", err));


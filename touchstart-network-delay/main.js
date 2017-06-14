const ROLE = window.location.hash;

const API_KEY = 'lwjd5qra8257b9';
const ID = 'k5lxg3tixtq8semi';

function time() {
  return (new Date()).getTime();
}

function receiver() {
  const peer = new Peer(ID, {key: API_KEY});
  peer.on('open', function() {
    peer.on('connection', function(conn) {
      conn.on('data', function(json) {
        const data = JSON.parse(json);
        console.log('Label', data.label, 'Diff', time() - data.time);
      });
    });
  });
}

function sender() {
  const peer = new Peer({key: API_KEY});
  const conn = peer.connect(ID);
  conn.on('open', function() {
    console.info('Connection established on channel "%s"', ID);

    conn.on('data', function(data) {
      console.info('Received', data);
    });

    function sender(label) {
      return function send() {
        conn.send(JSON.stringify({
          label,
          time: time(),
        }));
      }
    }

    document.addEventListener('touchstart', sender('touchstart'));
    document.addEventListener('touchend', sender('touchend'));
  });
}

if (ROLE === '#sender') {
  sender();
} else {
  receiver();
}

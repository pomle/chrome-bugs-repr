window.addEventListener('load', function() {
  const API_KEY = 'lwjd5qra8257b9';
  let id;

  function receiver() {
    const peer = new Peer({key: API_KEY});
    peer.on('open', function(_id) {
      id = _id;
      console.log(id);
      sender();
      peer.on('connection', function(conn) {
        conn.on('data', function(data) {
          console.log(data);
        });
      });
    });
  }

  function sender() {
    const peer = new Peer({key: API_KEY});
    const conn = peer.connect(id);
    conn.on('open', function() {
      console.info('Connection established on channel "%s"', id);

      conn.on('data', function(data) {
        console.info('Received', data);
      });
      conn.send('Hello!');
    });
  }

  receiver();
});
const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control.js');

const ticketControl = new TicketControl();

io.on('connection', (client) => {


    client.on('siguienteTicket', ( data, callback ) => {

        let siguiente = ticketControl.siguiente();

        console.log(siguiente);
        callback(siguiente);
        

    });

    // Emitir un evento llamado 'estadoActual' que debe retornar el último ticket
    /*
        Debe retornar
        {
            actual: ticketControl.getUltimoTicket()   
        }
    */

    client.emit('estadoActual', {
                                actual: ticketControl.getUltimoTicket()   
                                });


});
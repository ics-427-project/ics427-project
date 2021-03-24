mport React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import swal from 'sweetalert';
import { createEventId } from '../../api/Event/event-utils';
import { Stuffs } from '../../api/stuff/Stuff';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
function renderEventContent(eventInfo) {
    return (
        <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
        </>
    );
}

export default class Calendar extends React.Component {
    /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
    state = {
        weekendsVisible: true,
        currentEvents: [],
    }

    render() {
        return (
            <div>

            </div>
        );
    }
    
};
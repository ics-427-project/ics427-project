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
            <div className='demo-app'>
                {this.renderSidebar()}
                <div className='demo-app-main'>
                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek,timeGridDay',
                        }}
                        initialView='dayGridMonth'
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        weekends={this.state.weekendsVisible}
                        select={this.handleDateSelect}
                        eventContent={renderEventContent}
                        eventClick={ e => this.handleEventClick(e, this.props.stuffs._id)}
                        eventsSet={this.handleEvents}
                        events={this.props.stuffs}
                    />
                </div>
            </div>
        );
    }


    
};
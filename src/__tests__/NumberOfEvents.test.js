import { render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';
import App from '../App';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(
            <NumberOfEvents setCurrentNOE={() => {}} setErrorAlert={() => {}} />
        );
    });

    test('contains an element with the role of the textbox', () => {
        const numberTextBox = NumberOfEventsComponent.queryByRole('textbox');
        expect(numberTextBox).toBeInTheDocument();
    });

    test('the default value of the input field is 32', () => {
        expect(NumberOfEventsComponent.queryByRole('textbox')).toHaveValue(
            '32'
        );
    });

    test('value of number of events changes correctly when a user types in textbox', async () => {
        const numberOfEvents = NumberOfEventsComponent.queryByRole('textbox');
        const user = userEvent.setup();
        await user.type(numberOfEvents, '{backspace}{backspace}10');
        expect(numberOfEvents).toHaveValue('10');
    });
});

describe('<NumberOfEvents /> integration', () => {
    test('selected number of events by the user are rendered', async () => {
        const AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;
        const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');
        const NumberOfEventsInput =
            within(NumberOfEventsDOM).queryByRole('textbox');

        await userEvent.type(NumberOfEventsInput, '{backspace}{backspace}10');

        const EventListDOM = AppDOM.querySelector('#event-list');
        const allRenderedEventItems =
            within(EventListDOM).queryAllByRole('listitem');
        expect(allRenderedEventItems.length).toEqual(10);
    });
});

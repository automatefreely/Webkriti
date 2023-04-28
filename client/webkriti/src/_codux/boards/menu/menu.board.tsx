import { createBoard } from '@wixc3/react-board';
import { Menu } from '../../../components/menu/menu';

export default createBoard({
    name: 'Menu',
    Board: () => <Menu />,
    environmentProps: {
        canvasWidth: 794,
        windowWidth: 1020,
    },
});

import styles from './menu.module.scss';
import classNames from 'classnames';
import logo from '../../assets/logo.png';
import Menu_module from './menu.module.css';

export interface MenuProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-menus-and-templates
 */
export const Menu = ({ className }: MenuProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <header>
                <div className={Menu_module.menu}>
                    <div className={Menu_module.logo}>
                        <img src={logo} alt="Prayas Logo" width="50" height="50" />
                        <div>Prayas</div>
                    </div>
                    <div className={Menu_module.buttons}>
                        <div className={Menu_module.button}>
                            <a href="/">About Us</a>
                        </div>
                        <div className={Menu_module.button}>
                            <a href="/">Donate</a>
                        </div>
                        <div className={Menu_module.button}>
                            <a href="/">Events</a>
                        </div>
                        <div className={Menu_module.button}>
                            <a href="/">Sucess Stories</a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

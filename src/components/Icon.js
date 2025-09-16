import React, { useMemo } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { MaterialIcons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Octicons from '@expo/vector-icons/Octicons';

const DEFAULT_ICON_SIZE = 14
const DEFAULT_ICON_COLOR = '#737373'

export const iconMap = {
    'shoppingcart': 'AntDesign',
    'hearto': 'AntDesign',
    'heart': 'AntDesign',
    'search': 'AntDesign',
    'plus': 'AntDesign',
    'minuscircleo': 'AntDesign',
    'swap': 'AntDesign',
    'staro': 'AntDesign',
    'user': 'AntDesign',
    'question': 'AntDesign',
    'checkcircle': 'AntDesign',
    'home': 'MaterialIcons',
    'settings': 'MaterialIcons',
    'logout': 'MaterialIcons',
    'notifications': 'MaterialIcons',
    'photo-camera': 'MaterialIcons',
    'menu': 'MaterialIcons',
    'edit': 'MaterialIcons',
    'delete': 'MaterialIcons',
    'arrow-forward': 'MaterialIcons',
    'long-arrow-left': 'FontAwesome',
    'long-arrow-right': 'FontAwesome',
    'link-external': 'Octicons',

};


const componentLibrary = {
    AntDesign,
    MaterialIcons,
    FontAwesome,
    Octicons,
};

const Icon = ({
    name = '',
    size = DEFAULT_ICON_SIZE,
    color = DEFAULT_ICON_COLOR,
    style,
    ...props
}) => {

    const IconComponent = useMemo(() => {
        const componentName = iconMap[name];
        if (!componentName) {
            return AntDesign;
        }
        return componentLibrary[componentName];
    }, [name]);

    return (
        <IconComponent
            name={name}
            size={size}
            color={color}
            style={style}
            {...props}
        />
    );
};

/**
 * memo prevents re-rendering if props don't change on
 * parent re-render
 */
export default Icon;


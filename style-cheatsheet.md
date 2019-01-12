# Style cheatsheet for the workshop

### Button
```
import { Colors } from '../../styles/Colors';
import { darken, transparentize, lighten, padding } from 'polished'
import { Layout } from '../../styles/Layout';

const style = css({
  WebkitAppearance: 'none',
  fontSize: '1.8rem',
  lineHeight: Layout.GridGap3,
  fontWeight: '500',
  color: Colors.UIWhite,
  backgroundColor: Colors.UIBlue,
  ...padding(Layout.GridGap2, Layout.GridGap4),
  border: '0',
  borderRadius: '3px',
  boxShadow: `0 2px 5px ${transparentize(0.7, darken(0.2, Colors.UIBlue))}`,
  transition: 'all 0.2s ease-in-out',
  cursor: 'pointer',
});
```

### Input
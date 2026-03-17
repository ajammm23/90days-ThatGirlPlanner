import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```
- Click **"Commit changes"** → confirm

---

**Step 3 — Create `.npmrc`**
- Go back to the root of the repo (click **90days-ThatGirlPlanner** at the top)
- Click **"Add file"** → **"Create new file"**
- Name it: `.npmrc`
- Paste:
```
legacy-peer-deps=true

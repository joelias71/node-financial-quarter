import * as fs from 'fs';
import * as path from 'path';

export function loadData() {
    try {
        return JSON.parse(fs.readFileSync(path.join(__dirname, '/sales.json'), 'utf8'));
    } catch (e) {
        return []    
    }
}
import { Hono } from 'hono';
import { groupRoutes } from './routes/group.js';
import { metadataRoutes } from './routes/metadata.js';
import { referenceRoutes } from './routes/references.js';

const app = new Hono();

app.route('/fhir', groupRoutes);
app.route('/fhir', metadataRoutes);
app.route('/fhir', referenceRoutes);

export default app;

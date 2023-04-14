import {Router} from 'express';

const router = Router();

router.get('/contato', (req, res) => {
    res.send('Página de contato em construção')
});

export default router;
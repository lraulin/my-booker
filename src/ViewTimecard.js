import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Inspector from './Inspector';
import ImageViewer from './ImageViewer';
import { useLocation } from 'react-router-dom';
import { useAuth } from 'use-auth';
import { fetchOneTimecard } from 'api';

const useQuery = () => new URLSearchParams(useLocation().search);

const ViewTimecard = (props) => {
  const [tc, setTc] = useState(null);
  const [count, setCount] = useState(0);
  const auth = useAuth();
  const query = useQuery();

  useEffect(() => {
    let mounted = true;
    console.log(count);
    setCount(count + 1);
    if (count > 1) return () => (mounted = false);
    if (auth.token) {
      const id = query.get('id');

      fetchOneTimecard(id, auth.token).then((item) => {
        console.log('Fetched one timecard...');
        console.log(mounted);
        console.log(JSON.stringify(Object.keys(item)));
        if (mounted && item) {
          setTc(item);
        }
      });
    }
    return () => (mounted = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (tc)
    return (
      <Container fluid>
        <Row>
          <Col>
            <ImageViewer timecardPhotoUrls={tc.timecardPhotoUrls}></ImageViewer>
          </Col>
          <Col>
            <Inspector tc={tc}></Inspector>;
          </Col>
        </Row>
      </Container>
    );
  else return null;
};

export default ViewTimecard;

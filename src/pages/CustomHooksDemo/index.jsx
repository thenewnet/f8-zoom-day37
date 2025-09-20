
import useApi from '@/hooks/useApi';
import styles from './CustomHooksDemo.module.scss';
import { useEffect } from 'react';
import useToggle from '@/hooks/useToggle';

function CustomHooksDemo() {

    //useApi
    const { data, loading, error, refetch } = useApi('https://jsonplaceholder.typicode.com/posts');
    //useToggle
    const [isVisible, toggleVisible, setVisible] = useToggle(false);

    const { data: users, loading: usersLoading, error: usersError, refetch: usersRefetch } = useApi('https://jsonplaceholder.typicode.com/users');
    const { data: posts, loading: postsLoading, error: postsError, refetch: postsRefetch } = useApi('https://jsonplaceholder.typicode.com/posts');

    //testing loading
    useEffect(() => {
        console.log('loading', loading);
    }, [loading]);

    useEffect(() => {
        console.log('usersLoading', usersLoading);
    }, [usersLoading]);

    useEffect(() => {
        console.log('postsLoading', postsLoading);
    }, [postsLoading]);
    

    return (
        <>
            <div className={styles.container}>
                <h1>CustomHooks Demo</h1>
                <div className={styles.content}>
                    <div className={styles.left}>
                        <button className={styles.btn} onClick={refetch}>Refetch Data</button>
                        {loading && <div>Loading...</div>}
                        {error && <div>Error: {error}</div>}
                        {data?.map(item => <div key={item.id}>{item.title}</div>)}
                    </div>

                    <div className={styles.right}>
                        <button className={styles.btn} onClick={toggleVisible}>
                            {isVisible ? 'Hide' : 'Show'} Content
                        </button>
                        <button className={styles.btn} onClick={() => setVisible(true)}>Force Show</button>

                        {isVisible && <div>This content can be toggled!</div>}
                    </div>



                </div>

                <div className={styles.content}>
                    {/* Users and Posts */}
                    <div className={styles.left}>
                        <button className={styles.btn} onClick={usersRefetch}>Refetch Users</button>
                        {usersLoading && <div>Loading users...</div>}
                        {usersError && <div>Error users: {error}</div>}
                        {users?.map(user => <div key={user.id}>{user.id}-{user.name}</div>)}
                    </div>

                    <div className={styles.right}>
                        <button className={styles.btn} onClick={postsRefetch}>Refetch Posts</button>
                        {postsLoading && <div>Loading posts...</div>}
                        {postsError && <div>Error posts: {error}</div>}
                        {posts?.map(item => <div key={item.id}>{item.id}-{item.title}</div>)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomHooksDemo;
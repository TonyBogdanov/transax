( async () => {
    const currentVersion = document.location.toString().match( /\/v([\d.]+)\// )[1];

    const response = await fetch( 'https://data.jsdelivr.com/v1/package/npm/transax' );
    const { versions } = await response.json();

    const inject = nav => {
        console.log( 'inject version dropdown' );

        const item = document.createElement( 'div' );
        item.classList.add( 'nav-item' );
        item.classList.add( 'nav-version' );
        item.classList.add( 'hide-in-mobile' );
        nav.insertBefore( item, nav.firstChild );

        const wrapper = document.createElement( 'div' );
        wrapper.classList.add( 'dropdown-wrapper' );
        item.appendChild( wrapper );

        const button = document.createElement( 'button' );
        button.type = 'button';
        button.classList.add( 'dropdown-title' );
        wrapper.appendChild( button );

        const title = document.createElement( 'span' );
        title.classList.add( 'title' );
        title.textContent = `v${ currentVersion }`;
        button.appendChild( title );

        const arrow = document.createElement( 'span' );
        arrow.classList.add( 'arrow' );
        button.appendChild( arrow );

        const dropdown = document.createElement( 'ul' );
        dropdown.classList.add( 'nav-dropdown' );
        button.appendChild( dropdown );

        for ( const version of versions ) {
            const li = document.createElement( 'li' );
            const a = document.createElement( 'a' );

            a.classList.add( 'vp-link' );
            a.classList.add( 'nav-link' );
            a.classList.add( 'nav-link' );
            a.href = `/transax/v${ version }/`;
            a.textContent = `v${ version }`;

            if ( currentVersion === version ) {
                a.classList.add( 'active' );
            }

            li.classList.add( 'dropdown-item' );
            li.appendChild( a );

            dropdown.appendChild( li );
        }
    };

    const sync = () => {
        let nav = document.querySelector( '#navbar > .vp-navbar-end' );
        nav && !nav.querySelector( '.nav-version' ) && inject( nav );
        
        requestAnimationFrame( sync );
    };

    sync();
} )().catch( console.error );

/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className='nav-footer' id='footer'>
        <section className='sitemap'>
          <div style={{ textAlign: 'center' }}>
            <h5>
              <a
                href='https://twitter.com/'
                target='_blank'
                rel='noreferrer noopener'
              >
                Twitter
              </a>
            </h5>
            <h5>
              <a href='https://github.com/manrajgrover/algorithms-js'>GitHub</a>
            </h5>
            <a
              className='github-button'
              href={this.props.config.repoUrl}
              data-icon='octicon-star'
              data-count-href='/facebook/docusaurus/stargazers'
              data-show-count='true'
              data-count-aria-label='# stargazers on GitHub'
              aria-label='Star this project on GitHub'
            >
              Star
            </a>
          </div>
        </section>

        <a
          href='https://code.facebook.com/projects/'
          target='_blank'
          rel='noreferrer noopener'
          className='fbOpenSource'
        >
          <img
            src={`${this.props.config.baseUrl}img/oss_logo.png`}
            alt='Facebook Open Source'
            width='170'
            height='45'
          />
        </a>
        <section className='copyright'>{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;

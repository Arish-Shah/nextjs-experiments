import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { Page } from "../components/Page";
import { Content } from "../components/Content";
import { Sidebar } from "../components/Sidebar";
import { SidebarSection } from "../components/Sidebar/SidebarSection";

const Tos: NextPage = () => {
  return (
    <Page nav>
      <Head>
        <title>Twitter / Twitter Terms of Service</title>
      </Head>
      <Content>
        <h2>Terms of Service</h2>
        <p>
          By using the Twitter.com web site, a service of Twitter, Inc., you are
          agreeing to be bound by the following terms and conditions ("Terms of
          Use").
        </p>
        <h3>Basic Terms</h3>
        <ol>
          <li>You must be 13 years or older to use this site.</li>
          <li>
            You are responsible for any activity that occurs under your screen
            name.
          </li>
          <li>You are responsible for keeping your password secure.</li>
          <li>
            You must not abuse, harass, threaten, impersonate or intimidate
            other Twitter users.
          </li>
          <li>
            You may not use the Twitter.com service for any illegal or
            unauthorized purpose. International users agree to comply with all
            local laws regarding online conduct and acceptable content.
          </li>
          <li>
            You are solely responsible for your conduct and any data, text,
            information, screen names, graphics, photos, profiles, audio and
            video clips, links ("Content") that you submit, post, and display on
            the Twitter.com service.
          </li>
          <li>
            You must not modify, adapt or hack Twitter.com or modify another
            website so as to falsely imply that it is associated with
            Twitter.com .
          </li>
          <li>
            You must not create or submit unwanted email to any Twitter members
            ("Spam").
          </li>
          <li>
            You must not transmit any worms or viruses or any code of a
            destructive nature.
          </li>
          <li>
            You must not, in the use of Twitter, violate any laws in your
            jurisdiction (including but not limited to copyright laws).
          </li>
        </ol>
        <p>
          Violation of any of these agreements will result in the termination of
          your Twitter.com account. While Twitter.com prohibits such conduct and
          content on its site, you understand and agree that Twitter cannot be
          responsible for the Content posted on its web site and you nonetheless
          may be exposed to such materials and that you use the Twitter.com
          service at your own risk.
        </p>
        <h3>General Conditions</h3>
        <ol>
          <li>
            We reserve the right to modify or terminate the Twitter.com service
            for any reason, without notice at any time.
          </li>
          <li>
            We reserve the right to alter these Terms of Use at any time. If the
            alterations constitute a material change to the Terms of Use, we
            will notify you via internet mail according to the preference
            expressed on your account. What constitutes a "material change" will
            be determined at our sole discretion, in good faith and using common
            sense and reasonable judgement.
          </li>
          <li>
            We reserve the right to refuse service to anyone for any reason at
            any time.
          </li>
          <li>
            We may, but have no obligation to, remove Content and accounts
            containing Content that we determine in our sole discretion are
            unlawful, offensive, threatening, libelous, defamatory, obscene or
            otherwise objectionable or violates any party's intellectual
            property or these Terms of Use.
          </li>
          <li>
            The Twitter service makes it possible to post images and text hosted
            on Twitter to outside websites. This use is accepted (and even
            encouraged!). However, pages on other websites which display data
            hosted on Twitter.com must provide a link back to Twitter.
          </li>
          <li>
            We reserve the right to reclaim usernames on behalf of businesses or
            individuals that hold legal claim or trademark on those usernames.
          </li>
        </ol>
        <h3>Copyright (What's Yours is Yours)</h3>
        <ol>
          <li>
            We claim no intellectual property rights over the material you
            provide to the Twitter service. Your profile and materials uploaded
            remain yours. You can remove your profile at any time by deleting
            your account. This will also remove any text and images you have
            stored in the system.
          </li>
          <li>
            We encourage users to contribute their creations to the public
            domain or consider progressive licensing terms.
          </li>
          <li>
            Twitter undertakes to obey all relevant copyright laws. We will
            review all claims of copyright infringement received and remove
            content deemed to have been posted or distributed in violation of
            any such laws. To make a claim, please provide us with the
            following:
            <ol>
              <li>
                A physical or electronic signature of the copyright owner or the
                person authorized to act on its behalf;
              </li>
              <li>
                A description of the copyrighted work claimed to have been
                infringed;
              </li>
              <li>
                A description of the infringing material and information
                reasonably sufficient to permit Twitter to locate the material;
              </li>
              <li>
                Your contact information, including your address, telephone
                number, and email;
              </li>
              <li>
                A statement by you that you have a good faith belief that use of
                the material in the manner complained of is not authorized by
                the copyright owner, its agent, or the law; and
              </li>
              <li>
                A statement that the information in the notification is
                accurate, and, under the pains and penalties of perjury, that
                you are authorized to act on behalf of the copyright owner.
              </li>
            </ol>
          </li>
        </ol>
        <p>
          Claims can be sent to{" "}
          <Link href="mailto:copyright@twitter.com">
            <a>copyright@twitter.com</a>
          </Link>{" "}
          or Twitter Inc., 539 Bryant Street, Suite 402, San Francisco CA 94107.
          Contact the agent designated to receive and act on copyright
          violations under the Digital Millennium Copyright Act (DMCA).
        </p>
        <p>
          <em>
            (These terms of service were inspired, with permission, by Flickr.)
          </em>
        </p>
      </Content>
      <Sidebar>
        <SidebarSection>
          <h1 className="section-header">Opting-in to SMS Updates</h1>
          <ol>
            <li>Sign up on the Web at www.twitter.com</li>
            <li>
              Text "follow username" to with your mobile (where "username" is a
              registered Twitter username).
            </li>
            <li>
              Accept an invitation from a registered Twitter user via SMS or
              email
            </li>
          </ol>
          <h1 className="section-header">Opting-out of SMS Updates</h1>
          <ol>
            <li>To delete your account text "delete me" or "stop all" to</li>
            <li>
              Disable all mobile updates by texting any of the following words
              to : "off, end, stop, quit, cancel, unsubscribe"
            </li>
            <li>
              All mobile updates my also be disabled from the web at Twitter.com
            </li>
            <li>
              Disable mobile updates from a specific registered Twitter user or
              users by texting "leave username" to (where "username" is a
              registered Twitter username).
            </li>
          </ol>
        </SidebarSection>
      </Sidebar>
    </Page>
  );
};

export default Tos;

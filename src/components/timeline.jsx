import { Link, Timeline, Text } from "@primer/react";
import {
  MortarBoardIcon,
  GitCommitIcon,
  LinkExternalIcon,
} from "@primer/octicons-react";

export default function TLine() {
  return (
    <Timeline
      as="section"
      sx={{
        maxWidth: "calc(max(75%,500px))",
        animationName: "unfaded",
        animationDuration: "0.5s",
        animationFillMode: "forwards",
      }}
    >
      <Timeline.Item>
        <Timeline.Badge>
          <MortarBoardIcon />
        </Timeline.Badge>
        <Timeline.Body sx={{ fontSize: "1rem" }}>
          I earned my Ph.D. in 2019 from Brown University's Division of Applied
          Mathematics. For my{" "}
          <Link
            href="https://doi.org/10.26300/nhfp-xv22"
            target="_blank"
            rel="noopener noreferrer"
            inline={true}
            sx={{ whiteSpace: "nowrap" }}
          >
            dissertation&thinsp;
            <LinkExternalIcon verticalAlign="middle" />
          </Link>{" "}
          <Text sx={{ whiteSpace: "nowrap" }}>
            (
            <Link
              href="https://doi.org/10.6084/m9.figshare.8085749"
              target="_blank"
              rel="noopener noreferrer"
              inline={true}
            >
              presentation&thinsp;
              <LinkExternalIcon verticalAlign="middle" />
            </Link>
            ),
          </Text>{" "}
          I derived a novel approach to Bayesian filtering, the Discriminative
          Kalman Filter, motivated by and developed with my advisor M. Harrison
          and collaborators D. Brandman and L. Hochberg. We validated and
          successfully implemented this filter as part of the{" "}
          <Link
            href="https://www.braingate.org"
            target="_blank"
            rel="noopener noreferrer"
            inline={true}
          >
            BrainGate
          </Link>{" "}
          Clinical Trial that enables participants with quadriplegia to
          communicate and interact with their environments in real time using
          mental imagery alone{" "}
          <Text sx={{ whiteSpace: "nowrap" }}>
            (
            <Link
              href="https://doi.org/10.1162/neco_a_01275"
              target="_blank"
              rel="noopener noreferrer"
              inline={true}
            >
              paper&thinsp;
              <LinkExternalIcon verticalAlign="middle" />
            </Link>
            ).
          </Text>
        </Timeline.Body>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Badge>
          <GitCommitIcon />
        </Timeline.Badge>
        <Timeline.Body sx={{ fontSize: "1rem" }}>
          I then spent three years working as a machine learning scientist at
          Adobe in California. My main projects involved customer segmentation
          and causal inference. I also supervised intern projects in
          representation learning for semi-supervised classification{" "}
          <Text sx={{ whiteSpace: "nowrap" }}>
            (
            <Link
              href="https://doi.org/10.1007/978-3-030-50420-5_22"
              target="_blank"
              rel="noopener noreferrer"
              inline={true}
            >
              paper&thinsp;
              <LinkExternalIcon verticalAlign="middle" />
            </Link>
            ,
          </Text>{" "}
          <Text sx={{ whiteSpace: "nowrap" }}>
            <Link
              href="https://patents.google.com/patent/US11455518B2"
              target="_blank"
              rel="noopener noreferrer"
              inline={true}
            >
              patent&thinsp;
              <LinkExternalIcon verticalAlign="middle" />
            </Link>
            )
          </Text>{" "}
          and causal inference{" "}
          <Text sx={{ whiteSpace: "nowrap" }}>
            (
            <Link
              href="https://doi.org/10.1016/j.jocs.2023.102054"
              target="_blank"
              rel="noopener noreferrer"
              inline={true}
            >
              paper&thinsp;
              <LinkExternalIcon verticalAlign="middle" />
            </Link>
            ,
          </Text>{" "}
          <Text sx={{ whiteSpace: "nowrap" }}>
            <Link
              href="https://patents.google.com/patent/US20230376776A1"
              target="_blank"
              rel="noopener noreferrer"
              inline={true}
            >
              patent pending&thinsp;
              <LinkExternalIcon verticalAlign="middle" />
            </Link>
            ,
          </Text>{" "}
          <Text sx={{ whiteSpace: "nowrap" }}>
            <Link
              href="https://doi.org/10.6084/m9.figshare.24990633"
              target="_blank"
              rel="noopener noreferrer"
              inline={true}
            >
              presentation&thinsp;
              <LinkExternalIcon verticalAlign="middle" />
            </Link>
            ).
          </Text>
        </Timeline.Body>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Badge>
          <GitCommitIcon />
        </Timeline.Badge>
        <Timeline.Body sx={{ fontSize: "1rem" }}>
          In 2021, I joined Cambridge University as a research associate to
          develop machine learning-based approaches for the early diagnosis of
          neurodegenerative disease{" "}
          <Text sx={{ whiteSpace: "nowrap" }}>
            (
            <Link
              href="https://doi.org/10.1002/alz.062434"
              target="_blank"
              rel="noopener noreferrer"
              inline={true}
              sx={{ whiteSpace: "nowrap" }}
            >
              abstract&thinsp;
              <LinkExternalIcon verticalAlign="middle" />
            </Link>
            ,
          </Text>{" "}
          <Text sx={{ whiteSpace: "nowrap" }}>
            <Link
              href="https://www.c2d3.cam.ac.uk/sites/www.c2d3.cam.ac.uk/files/attachments/2023-01/michael_burkhart_-_trustworthy_ai_workshop_-_updated.pdf"
              target="_blank"
              rel="noopener noreferrer"
              inline={true}
              sx={{ whiteSpace: "nowrap" }}
            >
              presentation&thinsp;
              <LinkExternalIcon verticalAlign="middle" />
            </Link>
            ,
          </Text>{" "}
          <Text sx={{ whiteSpace: "nowrap" }}>
            <Link
              href="https://doi.org/10.1038/s41598-024-60914-w"
              target="_blank"
              rel="noopener noreferrer"
              inline={true}
              sx={{ whiteSpace: "nowrap" }}
            >
              paper&thinsp;
              <LinkExternalIcon verticalAlign="middle" />
            </Link>
            ).
          </Text>{" "}
          I also investigated how sequential inference can be applied to
          optimization{" "}
          <Text sx={{ whiteSpace: "nowrap" }}>
            (
            <Link
              href="https://doi.org/10.1007/s11590-022-01895-5"
              target="_blank"
              rel="noopener noreferrer"
              inline={true}
            >
              paper&thinsp;
              <LinkExternalIcon verticalAlign="middle" />
            </Link>
            )
          </Text>{" "}
          and conditions for non-coprime actions in abstract groups to have
          fixed points{" "}
          <Text sx={{ whiteSpace: "nowrap" }}>
            (
            <Link
              href="https://doi.org/10.1017/prm.2023.96"
              target="_blank"
              rel="noopener noreferrer"
              inline={true}
            >
              paper&thinsp;
              <LinkExternalIcon verticalAlign="middle" />
            </Link>
            ,{" "}
            <Link
              href="https://doi.org/10.1017/S0017089524000363"
              target="_blank"
              rel="noopener noreferrer"
              inline={true}
            >
              paper&thinsp;
              <LinkExternalIcon verticalAlign="middle" />
            </Link>
            ).
          </Text>
        </Timeline.Body>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Badge>
          <GitCommitIcon />
        </Timeline.Badge>
        <Timeline.Body sx={{ fontSize: "1rem" }}>
          In 2024, I joined the{" "}
          <Link
            href="https://bbjlab.com"
            target="_blank"
            rel="noopener noreferrer"
            inline={true}
          >
            Beaulieu-Jones Lab
          </Link>{" "}
          at the University of Chicago to continue working to improve machine
          learning for healthcare applications.
        </Timeline.Body>
      </Timeline.Item>
    </Timeline>
  );
}

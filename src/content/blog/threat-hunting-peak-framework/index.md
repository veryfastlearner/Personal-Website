---
title: "Threat Hunting with the PEAK Framework: Hypotheses, Baselines, and Models"
description: "Applying the PEAK framework to proactive hunts, from hypothesis-driven analysis to baselines and machine-learning models."
date: "2026-11-09"
lang: en
---

Threat hunting is a proactive approach to finding incidents missed by a SOAR.

## PEAK: Prepare, Execute, and Act with Knowledge

The PEAK framework is built around three phases: Prepare, Execute, and Act.

![PEAK threat hunting paths: topic-based and data-based scoping leading to hypothesis-based, model-assisted, or baseline hunting](/blog/threat-hunting-peak-framework/peak-hunting-paths.png)

- **Use a framework to guide your hunt.** The PEAK framework includes Prepare, Execute, and Act phases to guide threat hunting efforts.
- **Choose the right hunting path.** Select from topic-based, data-based, or hypothesis-based approaches based on your focus.
- **Document your findings.** Record insights to improve security processes, even if no threats are identified.
- **Leverage organizational knowledge.** Use expertise and past findings to shape your hunting strategy.
- **Measure hunting success.** Evaluate the effectiveness of your efforts to refine future threat hunting activities.

## Hypothesis-driven method

- **Describe the scientific method.** It structures hypothesis formation and testing in threat hunting.
- **Follow the Prepare phase.** Understanding the environment, selecting a hypothesis, and scoping your hunt are crucial.
- **Refine strategies with ABLE.** This method can help you enhance hypothesis development and testing.
- **Use tools such as regular expressions and SPL.** These tools are vital for identifying patterns and anomalies in log data.

## Baseline-driven method

1. **Recognize the value of baselines.** They are essential for identifying deviations and detecting threats.
2. **Identify outliers with standard deviation.** This technique helps in spotting anomalies in your data.
3. **Describe data cardinality.** It helps in recognizing the uniqueness of values in your dataset.
4. **Describe the interquartile range (IQR).** It aids in understanding data dispersion and identifying unexpected values. Applying IQR and standard deviation to pinpoint outliers in traffic can be helpful to threat hunting.
5. **Analyze from different angles.** Begin with simple queries and refine them for deeper insights.
6. **Apply context where it matters.** You need environmental knowledge to interpret whether outliers are malicious.

## Model-based approach

1. **Describe the M-ATH approach.** This approach uses machine learning to improve threat detection.
2. **Identify the common stages in this approach:** ensuring data is clean and labeled for effective model training, selecting appropriate algorithms and refining the model for accuracy, then testing the model with real-world data to identify hidden threats.

## Key points

- Cardinality supports identifying unique values.
- The Prepare phase focuses on understanding the environment, selecting a hypothesis, and scoping the hunt.
- IQR is used to detect outliers.
- The Act phase involves documenting findings and taking necessary actions to improve security processes.

> A data dictionary ensures consistency in terminology and data formats, which is essential for effective threat hunting.

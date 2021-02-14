"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KubeHorizontalPodAutoscalerV2Beta2 = exports.KubeHorizontalPodAutoscalerListV2Beta1 = exports.KubeHorizontalPodAutoscalerV2Beta1 = exports.KubeScale = exports.KubeHorizontalPodAutoscalerList = exports.KubeHorizontalPodAutoscaler = exports.KubeSubjectAccessReviewV1Beta1 = exports.KubeSelfSubjectRulesReviewV1Beta1 = exports.KubeSelfSubjectAccessReviewV1Beta1 = exports.KubeLocalSubjectAccessReviewV1Beta1 = exports.KubeSubjectAccessReview = exports.KubeSelfSubjectRulesReview = exports.KubeSelfSubjectAccessReview = exports.KubeLocalSubjectAccessReview = exports.KubeTokenReviewV1Beta1 = exports.KubeTokenReview = exports.KubeAuditSinkListV1Alpha1 = exports.KubeAuditSinkV1Alpha1 = exports.KubeStatefulSetListV1Beta2 = exports.KubeStatefulSetV1Beta2 = exports.KubeScaleV1Beta2 = exports.KubeReplicaSetListV1Beta2 = exports.KubeReplicaSetV1Beta2 = exports.KubeDeploymentListV1Beta2 = exports.KubeDeploymentV1Beta2 = exports.KubeDaemonSetListV1Beta2 = exports.KubeDaemonSetV1Beta2 = exports.KubeControllerRevisionListV1Beta2 = exports.KubeControllerRevisionV1Beta2 = exports.KubeStatefulSetListV1Beta1 = exports.KubeStatefulSetV1Beta1 = exports.KubeScaleV1Beta1 = exports.KubeDeploymentListV1Beta1 = exports.KubeDeploymentV1Beta1 = exports.KubeControllerRevisionListV1Beta1 = exports.KubeControllerRevisionV1Beta1 = exports.KubeStatefulSetList = exports.KubeStatefulSet = exports.KubeReplicaSetList = exports.KubeReplicaSet = exports.KubeDeploymentList = exports.KubeDeployment = exports.KubeDaemonSetList = exports.KubeDaemonSet = exports.KubeControllerRevisionList = exports.KubeControllerRevision = exports.KubeValidatingWebhookConfigurationListV1Beta1 = exports.KubeValidatingWebhookConfigurationV1Beta1 = exports.KubeMutatingWebhookConfigurationListV1Beta1 = exports.KubeMutatingWebhookConfigurationV1Beta1 = void 0;
exports.KubeDaemonSetListV1Beta1 = exports.KubeDaemonSetV1Beta1 = exports.KubeEventListV1Beta1 = exports.KubeEventV1Beta1 = exports.KubeServiceList = exports.KubeServiceAccountList = exports.KubeServiceAccount = exports.KubeService = exports.KubeSecretList = exports.KubeSecret = exports.KubeResourceQuotaList = exports.KubeResourceQuota = exports.KubeReplicationControllerList = exports.KubeReplicationController = exports.KubePodTemplateList = exports.KubePodTemplate = exports.KubePodList = exports.KubePod = exports.KubePersistentVolumeList = exports.KubePersistentVolumeClaimList = exports.KubePersistentVolumeClaim = exports.KubePersistentVolume = exports.KubeNodeList = exports.KubeNode = exports.KubeNamespaceList = exports.KubeNamespace = exports.KubeLimitRangeList = exports.KubeLimitRange = exports.KubeEventList = exports.KubeEvent = exports.KubeEndpointsList = exports.KubeEndpoints = exports.KubeConfigMapList = exports.KubeConfigMap = exports.KubeComponentStatusList = exports.KubeComponentStatus = exports.KubeBinding = exports.KubeLeaseListV1Beta1 = exports.KubeLeaseV1Beta1 = exports.KubeLeaseList = exports.KubeLease = exports.KubeCertificateSigningRequestListV1Beta1 = exports.KubeCertificateSigningRequestV1Beta1 = exports.KubeCronJobListV2Alpha1 = exports.KubeCronJobV2Alpha1 = exports.KubeCronJobListV1Beta1 = exports.KubeCronJobV1Beta1 = exports.KubeJobList = exports.KubeJob = exports.KubeHorizontalPodAutoscalerListV2Beta2 = void 0;
exports.KubeStorageClass = exports.KubePodPresetListV1Alpha1 = exports.KubePodPresetV1Alpha1 = exports.KubePriorityClassListV1Beta1 = exports.KubePriorityClassV1Beta1 = exports.KubePriorityClassListV1Alpha1 = exports.KubePriorityClassV1Alpha1 = exports.KubePriorityClassList = exports.KubePriorityClass = exports.KubeRoleListV1Beta1 = exports.KubeRoleBindingListV1Beta1 = exports.KubeRoleBindingV1Beta1 = exports.KubeRoleV1Beta1 = exports.KubeClusterRoleListV1Beta1 = exports.KubeClusterRoleBindingListV1Beta1 = exports.KubeClusterRoleBindingV1Beta1 = exports.KubeClusterRoleV1Beta1 = exports.KubeRoleListV1Alpha1 = exports.KubeRoleBindingListV1Alpha1 = exports.KubeRoleBindingV1Alpha1 = exports.KubeRoleV1Alpha1 = exports.KubeClusterRoleListV1Alpha1 = exports.KubeClusterRoleBindingListV1Alpha1 = exports.KubeClusterRoleBindingV1Alpha1 = exports.KubeClusterRoleV1Alpha1 = exports.KubeRoleList = exports.KubeRoleBindingList = exports.KubeRoleBinding = exports.KubeRole = exports.KubeClusterRoleList = exports.KubeClusterRoleBindingList = exports.KubeClusterRoleBinding = exports.KubeClusterRole = exports.KubePodDisruptionBudgetListV1Beta1 = exports.KubePodDisruptionBudgetV1Beta1 = exports.KubeEvictionV1Beta1 = exports.KubeRuntimeClassListV1Beta1 = exports.KubeRuntimeClassV1Beta1 = exports.KubeRuntimeClassListV1Alpha1 = exports.KubeRuntimeClassV1Alpha1 = exports.KubeNetworkPolicyList = exports.KubeNetworkPolicy = exports.KubeReplicaSetListV1Beta1 = exports.KubeReplicaSetV1Beta1 = exports.KubePodSecurityPolicyListV1Beta1 = exports.KubePodSecurityPolicyV1Beta1 = exports.KubeNetworkPolicyListV1Beta1 = exports.KubeNetworkPolicyV1Beta1 = exports.KubeIngressListV1Beta1 = exports.KubeIngressV1Beta1 = void 0;
exports.IntOrString = exports.IoK8SApimachineryPkgApisMetaV1DeleteOptionsKind = exports.Quantity = exports.KubeApiServiceListV1Beta1 = exports.KubeApiServiceV1Beta1 = exports.KubeApiServiceList = exports.KubeApiService = exports.KubeStatus = exports.KubeCustomResourceDefinitionListV1Beta1 = exports.KubeCustomResourceDefinitionV1Beta1 = exports.KubeVolumeAttachmentListV1Beta1 = exports.KubeVolumeAttachmentV1Beta1 = exports.KubeStorageClassListV1Beta1 = exports.KubeStorageClassV1Beta1 = exports.KubeCsiNodeListV1Beta1 = exports.KubeCsiNodeV1Beta1 = exports.KubeCsiDriverListV1Beta1 = exports.KubeCsiDriverV1Beta1 = exports.KubeVolumeAttachmentListV1Alpha1 = exports.KubeVolumeAttachmentV1Alpha1 = exports.KubeVolumeAttachmentList = exports.KubeVolumeAttachment = exports.KubeStorageClassList = void 0;
// generated by cdk8s
const cdk8s_1 = require("cdk8s");
/**
 * MutatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and may change the object.
 *
 * @schema io.k8s.api.admissionregistration.v1beta1.MutatingWebhookConfiguration
 */
class KubeMutatingWebhookConfigurationV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.admissionregistration.v1beta1.MutatingWebhookConfiguration" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeMutatingWebhookConfigurationV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.admissionregistration.v1beta1.MutatingWebhookConfiguration".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeMutatingWebhookConfigurationV1Beta1.GVK), props);
    }
}
exports.KubeMutatingWebhookConfigurationV1Beta1 = KubeMutatingWebhookConfigurationV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.admissionregistration.v1beta1.MutatingWebhookConfiguration"
 */
KubeMutatingWebhookConfigurationV1Beta1.GVK = {
    apiVersion: 'admissionregistration.k8s.io/v1beta1',
    kind: 'MutatingWebhookConfiguration',
};
/**
 * MutatingWebhookConfigurationList is a list of MutatingWebhookConfiguration.
 *
 * @schema io.k8s.api.admissionregistration.v1beta1.MutatingWebhookConfigurationList
 */
class KubeMutatingWebhookConfigurationListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.admissionregistration.v1beta1.MutatingWebhookConfigurationList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeMutatingWebhookConfigurationListV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.admissionregistration.v1beta1.MutatingWebhookConfigurationList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeMutatingWebhookConfigurationListV1Beta1.GVK), props);
    }
}
exports.KubeMutatingWebhookConfigurationListV1Beta1 = KubeMutatingWebhookConfigurationListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.admissionregistration.v1beta1.MutatingWebhookConfigurationList"
 */
KubeMutatingWebhookConfigurationListV1Beta1.GVK = {
    apiVersion: 'admissionregistration.k8s.io/v1beta1',
    kind: 'MutatingWebhookConfigurationList',
};
/**
 * ValidatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and object without changing it.
 *
 * @schema io.k8s.api.admissionregistration.v1beta1.ValidatingWebhookConfiguration
 */
class KubeValidatingWebhookConfigurationV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.admissionregistration.v1beta1.ValidatingWebhookConfiguration" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeValidatingWebhookConfigurationV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.admissionregistration.v1beta1.ValidatingWebhookConfiguration".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeValidatingWebhookConfigurationV1Beta1.GVK), props);
    }
}
exports.KubeValidatingWebhookConfigurationV1Beta1 = KubeValidatingWebhookConfigurationV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.admissionregistration.v1beta1.ValidatingWebhookConfiguration"
 */
KubeValidatingWebhookConfigurationV1Beta1.GVK = {
    apiVersion: 'admissionregistration.k8s.io/v1beta1',
    kind: 'ValidatingWebhookConfiguration',
};
/**
 * ValidatingWebhookConfigurationList is a list of ValidatingWebhookConfiguration.
 *
 * @schema io.k8s.api.admissionregistration.v1beta1.ValidatingWebhookConfigurationList
 */
class KubeValidatingWebhookConfigurationListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.admissionregistration.v1beta1.ValidatingWebhookConfigurationList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeValidatingWebhookConfigurationListV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.admissionregistration.v1beta1.ValidatingWebhookConfigurationList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeValidatingWebhookConfigurationListV1Beta1.GVK), props);
    }
}
exports.KubeValidatingWebhookConfigurationListV1Beta1 = KubeValidatingWebhookConfigurationListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.admissionregistration.v1beta1.ValidatingWebhookConfigurationList"
 */
KubeValidatingWebhookConfigurationListV1Beta1.GVK = {
    apiVersion: 'admissionregistration.k8s.io/v1beta1',
    kind: 'ValidatingWebhookConfigurationList',
};
/**
 * ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers.
 *
 * @schema io.k8s.api.apps.v1.ControllerRevision
 */
class KubeControllerRevision extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1.ControllerRevision" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeControllerRevision.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1.ControllerRevision".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeControllerRevision.GVK), props);
    }
}
exports.KubeControllerRevision = KubeControllerRevision;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1.ControllerRevision"
 */
KubeControllerRevision.GVK = {
    apiVersion: 'apps/v1',
    kind: 'ControllerRevision',
};
/**
 * ControllerRevisionList is a resource containing a list of ControllerRevision objects.
 *
 * @schema io.k8s.api.apps.v1.ControllerRevisionList
 */
class KubeControllerRevisionList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1.ControllerRevisionList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeControllerRevisionList.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1.ControllerRevisionList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeControllerRevisionList.GVK), props);
    }
}
exports.KubeControllerRevisionList = KubeControllerRevisionList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1.ControllerRevisionList"
 */
KubeControllerRevisionList.GVK = {
    apiVersion: 'apps/v1',
    kind: 'ControllerRevisionList',
};
/**
 * DaemonSet represents the configuration of a daemon set.
 *
 * @schema io.k8s.api.apps.v1.DaemonSet
 */
class KubeDaemonSet extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1.DaemonSet" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeDaemonSet.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1.DaemonSet".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeDaemonSet.GVK), props);
    }
}
exports.KubeDaemonSet = KubeDaemonSet;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1.DaemonSet"
 */
KubeDaemonSet.GVK = {
    apiVersion: 'apps/v1',
    kind: 'DaemonSet',
};
/**
 * DaemonSetList is a collection of daemon sets.
 *
 * @schema io.k8s.api.apps.v1.DaemonSetList
 */
class KubeDaemonSetList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1.DaemonSetList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeDaemonSetList.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1.DaemonSetList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeDaemonSetList.GVK), props);
    }
}
exports.KubeDaemonSetList = KubeDaemonSetList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1.DaemonSetList"
 */
KubeDaemonSetList.GVK = {
    apiVersion: 'apps/v1',
    kind: 'DaemonSetList',
};
/**
 * Deployment enables declarative updates for Pods and ReplicaSets.
 *
 * @schema io.k8s.api.apps.v1.Deployment
 */
class KubeDeployment extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1.Deployment" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeDeployment.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1.Deployment".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeDeployment.GVK), props);
    }
}
exports.KubeDeployment = KubeDeployment;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1.Deployment"
 */
KubeDeployment.GVK = {
    apiVersion: 'apps/v1',
    kind: 'Deployment',
};
/**
 * DeploymentList is a list of Deployments.
 *
 * @schema io.k8s.api.apps.v1.DeploymentList
 */
class KubeDeploymentList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1.DeploymentList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeDeploymentList.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1.DeploymentList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeDeploymentList.GVK), props);
    }
}
exports.KubeDeploymentList = KubeDeploymentList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1.DeploymentList"
 */
KubeDeploymentList.GVK = {
    apiVersion: 'apps/v1',
    kind: 'DeploymentList',
};
/**
 * ReplicaSet ensures that a specified number of pod replicas are running at any given time.
 *
 * @schema io.k8s.api.apps.v1.ReplicaSet
 */
class KubeReplicaSet extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1.ReplicaSet" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeReplicaSet.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1.ReplicaSet".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeReplicaSet.GVK), props);
    }
}
exports.KubeReplicaSet = KubeReplicaSet;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1.ReplicaSet"
 */
KubeReplicaSet.GVK = {
    apiVersion: 'apps/v1',
    kind: 'ReplicaSet',
};
/**
 * ReplicaSetList is a collection of ReplicaSets.
 *
 * @schema io.k8s.api.apps.v1.ReplicaSetList
 */
class KubeReplicaSetList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1.ReplicaSetList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeReplicaSetList.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1.ReplicaSetList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeReplicaSetList.GVK), props);
    }
}
exports.KubeReplicaSetList = KubeReplicaSetList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1.ReplicaSetList"
 */
KubeReplicaSetList.GVK = {
    apiVersion: 'apps/v1',
    kind: 'ReplicaSetList',
};
/**
 * StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 - Network: A single stable DNS and hostname.
 - Storage: As many VolumeClaims as requested.
The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 *
 * @schema io.k8s.api.apps.v1.StatefulSet
 */
class KubeStatefulSet extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1.StatefulSet" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeStatefulSet.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1.StatefulSet".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeStatefulSet.GVK), props);
    }
}
exports.KubeStatefulSet = KubeStatefulSet;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1.StatefulSet"
 */
KubeStatefulSet.GVK = {
    apiVersion: 'apps/v1',
    kind: 'StatefulSet',
};
/**
 * StatefulSetList is a collection of StatefulSets.
 *
 * @schema io.k8s.api.apps.v1.StatefulSetList
 */
class KubeStatefulSetList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1.StatefulSetList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeStatefulSetList.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1.StatefulSetList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeStatefulSetList.GVK), props);
    }
}
exports.KubeStatefulSetList = KubeStatefulSetList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1.StatefulSetList"
 */
KubeStatefulSetList.GVK = {
    apiVersion: 'apps/v1',
    kind: 'StatefulSetList',
};
/**
 * DEPRECATED - This group version of ControllerRevision is deprecated by apps/v1beta2/ControllerRevision. See the release notes for more information. ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers.
 *
 * @schema io.k8s.api.apps.v1beta1.ControllerRevision
 */
class KubeControllerRevisionV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1beta1.ControllerRevision" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeControllerRevisionV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1beta1.ControllerRevision".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeControllerRevisionV1Beta1.GVK), props);
    }
}
exports.KubeControllerRevisionV1Beta1 = KubeControllerRevisionV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1beta1.ControllerRevision"
 */
KubeControllerRevisionV1Beta1.GVK = {
    apiVersion: 'apps/v1beta1',
    kind: 'ControllerRevision',
};
/**
 * ControllerRevisionList is a resource containing a list of ControllerRevision objects.
 *
 * @schema io.k8s.api.apps.v1beta1.ControllerRevisionList
 */
class KubeControllerRevisionListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1beta1.ControllerRevisionList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeControllerRevisionListV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1beta1.ControllerRevisionList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeControllerRevisionListV1Beta1.GVK), props);
    }
}
exports.KubeControllerRevisionListV1Beta1 = KubeControllerRevisionListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1beta1.ControllerRevisionList"
 */
KubeControllerRevisionListV1Beta1.GVK = {
    apiVersion: 'apps/v1beta1',
    kind: 'ControllerRevisionList',
};
/**
 * DEPRECATED - This group version of Deployment is deprecated by apps/v1beta2/Deployment. See the release notes for more information. Deployment enables declarative updates for Pods and ReplicaSets.
 *
 * @schema io.k8s.api.extensions.v1beta1.Deployment
 */
class KubeDeploymentV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.extensions.v1beta1.Deployment" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeDeploymentV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.extensions.v1beta1.Deployment".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeDeploymentV1Beta1.GVK), props);
    }
}
exports.KubeDeploymentV1Beta1 = KubeDeploymentV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.extensions.v1beta1.Deployment"
 */
KubeDeploymentV1Beta1.GVK = {
    apiVersion: 'extensions/v1beta1',
    kind: 'Deployment',
};
/**
 * DeploymentList is a list of Deployments.
 *
 * @schema io.k8s.api.extensions.v1beta1.DeploymentList
 */
class KubeDeploymentListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.extensions.v1beta1.DeploymentList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeDeploymentListV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.extensions.v1beta1.DeploymentList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeDeploymentListV1Beta1.GVK), props);
    }
}
exports.KubeDeploymentListV1Beta1 = KubeDeploymentListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.extensions.v1beta1.DeploymentList"
 */
KubeDeploymentListV1Beta1.GVK = {
    apiVersion: 'extensions/v1beta1',
    kind: 'DeploymentList',
};
/**
 * represents a scaling request for a resource.
 *
 * @schema io.k8s.api.extensions.v1beta1.Scale
 */
class KubeScaleV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.extensions.v1beta1.Scale" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeScaleV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.extensions.v1beta1.Scale".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeScaleV1Beta1.GVK), props);
    }
}
exports.KubeScaleV1Beta1 = KubeScaleV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.extensions.v1beta1.Scale"
 */
KubeScaleV1Beta1.GVK = {
    apiVersion: 'extensions/v1beta1',
    kind: 'Scale',
};
/**
 * DEPRECATED - This group version of StatefulSet is deprecated by apps/v1beta2/StatefulSet. See the release notes for more information. StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 - Network: A single stable DNS and hostname.
 - Storage: As many VolumeClaims as requested.
The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 *
 * @schema io.k8s.api.apps.v1beta1.StatefulSet
 */
class KubeStatefulSetV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1beta1.StatefulSet" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeStatefulSetV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1beta1.StatefulSet".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeStatefulSetV1Beta1.GVK), props);
    }
}
exports.KubeStatefulSetV1Beta1 = KubeStatefulSetV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1beta1.StatefulSet"
 */
KubeStatefulSetV1Beta1.GVK = {
    apiVersion: 'apps/v1beta1',
    kind: 'StatefulSet',
};
/**
 * StatefulSetList is a collection of StatefulSets.
 *
 * @schema io.k8s.api.apps.v1beta1.StatefulSetList
 */
class KubeStatefulSetListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1beta1.StatefulSetList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeStatefulSetListV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1beta1.StatefulSetList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeStatefulSetListV1Beta1.GVK), props);
    }
}
exports.KubeStatefulSetListV1Beta1 = KubeStatefulSetListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1beta1.StatefulSetList"
 */
KubeStatefulSetListV1Beta1.GVK = {
    apiVersion: 'apps/v1beta1',
    kind: 'StatefulSetList',
};
/**
 * DEPRECATED - This group version of ControllerRevision is deprecated by apps/v1/ControllerRevision. See the release notes for more information. ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers.
 *
 * @schema io.k8s.api.apps.v1beta2.ControllerRevision
 */
class KubeControllerRevisionV1Beta2 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1beta2.ControllerRevision" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeControllerRevisionV1Beta2.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1beta2.ControllerRevision".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeControllerRevisionV1Beta2.GVK), props);
    }
}
exports.KubeControllerRevisionV1Beta2 = KubeControllerRevisionV1Beta2;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1beta2.ControllerRevision"
 */
KubeControllerRevisionV1Beta2.GVK = {
    apiVersion: 'apps/v1beta2',
    kind: 'ControllerRevision',
};
/**
 * ControllerRevisionList is a resource containing a list of ControllerRevision objects.
 *
 * @schema io.k8s.api.apps.v1beta2.ControllerRevisionList
 */
class KubeControllerRevisionListV1Beta2 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1beta2.ControllerRevisionList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeControllerRevisionListV1Beta2.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1beta2.ControllerRevisionList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeControllerRevisionListV1Beta2.GVK), props);
    }
}
exports.KubeControllerRevisionListV1Beta2 = KubeControllerRevisionListV1Beta2;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1beta2.ControllerRevisionList"
 */
KubeControllerRevisionListV1Beta2.GVK = {
    apiVersion: 'apps/v1beta2',
    kind: 'ControllerRevisionList',
};
/**
 * DEPRECATED - This group version of DaemonSet is deprecated by apps/v1/DaemonSet. See the release notes for more information. DaemonSet represents the configuration of a daemon set.
 *
 * @schema io.k8s.api.apps.v1beta2.DaemonSet
 */
class KubeDaemonSetV1Beta2 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1beta2.DaemonSet" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeDaemonSetV1Beta2.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1beta2.DaemonSet".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeDaemonSetV1Beta2.GVK), props);
    }
}
exports.KubeDaemonSetV1Beta2 = KubeDaemonSetV1Beta2;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1beta2.DaemonSet"
 */
KubeDaemonSetV1Beta2.GVK = {
    apiVersion: 'apps/v1beta2',
    kind: 'DaemonSet',
};
/**
 * DaemonSetList is a collection of daemon sets.
 *
 * @schema io.k8s.api.apps.v1beta2.DaemonSetList
 */
class KubeDaemonSetListV1Beta2 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1beta2.DaemonSetList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeDaemonSetListV1Beta2.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1beta2.DaemonSetList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeDaemonSetListV1Beta2.GVK), props);
    }
}
exports.KubeDaemonSetListV1Beta2 = KubeDaemonSetListV1Beta2;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1beta2.DaemonSetList"
 */
KubeDaemonSetListV1Beta2.GVK = {
    apiVersion: 'apps/v1beta2',
    kind: 'DaemonSetList',
};
/**
 * DEPRECATED - This group version of Deployment is deprecated by apps/v1/Deployment. See the release notes for more information. Deployment enables declarative updates for Pods and ReplicaSets.
 *
 * @schema io.k8s.api.apps.v1beta2.Deployment
 */
class KubeDeploymentV1Beta2 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1beta2.Deployment" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeDeploymentV1Beta2.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1beta2.Deployment".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeDeploymentV1Beta2.GVK), props);
    }
}
exports.KubeDeploymentV1Beta2 = KubeDeploymentV1Beta2;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1beta2.Deployment"
 */
KubeDeploymentV1Beta2.GVK = {
    apiVersion: 'apps/v1beta2',
    kind: 'Deployment',
};
/**
 * DeploymentList is a list of Deployments.
 *
 * @schema io.k8s.api.apps.v1beta2.DeploymentList
 */
class KubeDeploymentListV1Beta2 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1beta2.DeploymentList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeDeploymentListV1Beta2.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1beta2.DeploymentList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeDeploymentListV1Beta2.GVK), props);
    }
}
exports.KubeDeploymentListV1Beta2 = KubeDeploymentListV1Beta2;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1beta2.DeploymentList"
 */
KubeDeploymentListV1Beta2.GVK = {
    apiVersion: 'apps/v1beta2',
    kind: 'DeploymentList',
};
/**
 * DEPRECATED - This group version of ReplicaSet is deprecated by apps/v1/ReplicaSet. See the release notes for more information. ReplicaSet ensures that a specified number of pod replicas are running at any given time.
 *
 * @schema io.k8s.api.apps.v1beta2.ReplicaSet
 */
class KubeReplicaSetV1Beta2 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1beta2.ReplicaSet" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeReplicaSetV1Beta2.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1beta2.ReplicaSet".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeReplicaSetV1Beta2.GVK), props);
    }
}
exports.KubeReplicaSetV1Beta2 = KubeReplicaSetV1Beta2;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1beta2.ReplicaSet"
 */
KubeReplicaSetV1Beta2.GVK = {
    apiVersion: 'apps/v1beta2',
    kind: 'ReplicaSet',
};
/**
 * ReplicaSetList is a collection of ReplicaSets.
 *
 * @schema io.k8s.api.apps.v1beta2.ReplicaSetList
 */
class KubeReplicaSetListV1Beta2 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1beta2.ReplicaSetList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeReplicaSetListV1Beta2.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1beta2.ReplicaSetList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeReplicaSetListV1Beta2.GVK), props);
    }
}
exports.KubeReplicaSetListV1Beta2 = KubeReplicaSetListV1Beta2;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1beta2.ReplicaSetList"
 */
KubeReplicaSetListV1Beta2.GVK = {
    apiVersion: 'apps/v1beta2',
    kind: 'ReplicaSetList',
};
/**
 * Scale represents a scaling request for a resource.
 *
 * @schema io.k8s.api.apps.v1beta2.Scale
 */
class KubeScaleV1Beta2 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1beta2.Scale" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeScaleV1Beta2.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1beta2.Scale".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeScaleV1Beta2.GVK), props);
    }
}
exports.KubeScaleV1Beta2 = KubeScaleV1Beta2;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1beta2.Scale"
 */
KubeScaleV1Beta2.GVK = {
    apiVersion: 'apps/v1beta2',
    kind: 'Scale',
};
/**
 * DEPRECATED - This group version of StatefulSet is deprecated by apps/v1/StatefulSet. See the release notes for more information. StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 - Network: A single stable DNS and hostname.
 - Storage: As many VolumeClaims as requested.
The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 *
 * @schema io.k8s.api.apps.v1beta2.StatefulSet
 */
class KubeStatefulSetV1Beta2 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1beta2.StatefulSet" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeStatefulSetV1Beta2.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1beta2.StatefulSet".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeStatefulSetV1Beta2.GVK), props);
    }
}
exports.KubeStatefulSetV1Beta2 = KubeStatefulSetV1Beta2;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1beta2.StatefulSet"
 */
KubeStatefulSetV1Beta2.GVK = {
    apiVersion: 'apps/v1beta2',
    kind: 'StatefulSet',
};
/**
 * StatefulSetList is a collection of StatefulSets.
 *
 * @schema io.k8s.api.apps.v1beta2.StatefulSetList
 */
class KubeStatefulSetListV1Beta2 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1beta2.StatefulSetList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeStatefulSetListV1Beta2.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1beta2.StatefulSetList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeStatefulSetListV1Beta2.GVK), props);
    }
}
exports.KubeStatefulSetListV1Beta2 = KubeStatefulSetListV1Beta2;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1beta2.StatefulSetList"
 */
KubeStatefulSetListV1Beta2.GVK = {
    apiVersion: 'apps/v1beta2',
    kind: 'StatefulSetList',
};
/**
 * AuditSink represents a cluster level audit sink
 *
 * @schema io.k8s.api.auditregistration.v1alpha1.AuditSink
 */
class KubeAuditSinkV1Alpha1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.auditregistration.v1alpha1.AuditSink" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeAuditSinkV1Alpha1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.auditregistration.v1alpha1.AuditSink".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeAuditSinkV1Alpha1.GVK), props);
    }
}
exports.KubeAuditSinkV1Alpha1 = KubeAuditSinkV1Alpha1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.auditregistration.v1alpha1.AuditSink"
 */
KubeAuditSinkV1Alpha1.GVK = {
    apiVersion: 'auditregistration.k8s.io/v1alpha1',
    kind: 'AuditSink',
};
/**
 * AuditSinkList is a list of AuditSink items.
 *
 * @schema io.k8s.api.auditregistration.v1alpha1.AuditSinkList
 */
class KubeAuditSinkListV1Alpha1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.auditregistration.v1alpha1.AuditSinkList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeAuditSinkListV1Alpha1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.auditregistration.v1alpha1.AuditSinkList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeAuditSinkListV1Alpha1.GVK), props);
    }
}
exports.KubeAuditSinkListV1Alpha1 = KubeAuditSinkListV1Alpha1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.auditregistration.v1alpha1.AuditSinkList"
 */
KubeAuditSinkListV1Alpha1.GVK = {
    apiVersion: 'auditregistration.k8s.io/v1alpha1',
    kind: 'AuditSinkList',
};
/**
 * TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver.
 *
 * @schema io.k8s.api.authentication.v1.TokenReview
 */
class KubeTokenReview extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.authentication.v1.TokenReview" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeTokenReview.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.authentication.v1.TokenReview".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeTokenReview.GVK), props);
    }
}
exports.KubeTokenReview = KubeTokenReview;
/**
 * Returns the apiVersion and kind for "io.k8s.api.authentication.v1.TokenReview"
 */
KubeTokenReview.GVK = {
    apiVersion: 'authentication.k8s.io/v1',
    kind: 'TokenReview',
};
/**
 * TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver.
 *
 * @schema io.k8s.api.authentication.v1beta1.TokenReview
 */
class KubeTokenReviewV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.authentication.v1beta1.TokenReview" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeTokenReviewV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.authentication.v1beta1.TokenReview".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeTokenReviewV1Beta1.GVK), props);
    }
}
exports.KubeTokenReviewV1Beta1 = KubeTokenReviewV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.authentication.v1beta1.TokenReview"
 */
KubeTokenReviewV1Beta1.GVK = {
    apiVersion: 'authentication.k8s.io/v1beta1',
    kind: 'TokenReview',
};
/**
 * LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking.
 *
 * @schema io.k8s.api.authorization.v1.LocalSubjectAccessReview
 */
class KubeLocalSubjectAccessReview extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.authorization.v1.LocalSubjectAccessReview" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeLocalSubjectAccessReview.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.authorization.v1.LocalSubjectAccessReview".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeLocalSubjectAccessReview.GVK), props);
    }
}
exports.KubeLocalSubjectAccessReview = KubeLocalSubjectAccessReview;
/**
 * Returns the apiVersion and kind for "io.k8s.api.authorization.v1.LocalSubjectAccessReview"
 */
KubeLocalSubjectAccessReview.GVK = {
    apiVersion: 'authorization.k8s.io/v1',
    kind: 'LocalSubjectAccessReview',
};
/**
 * SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means "in all namespaces".  Self is a special case, because users should always be able to check whether they can perform an action
 *
 * @schema io.k8s.api.authorization.v1.SelfSubjectAccessReview
 */
class KubeSelfSubjectAccessReview extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.authorization.v1.SelfSubjectAccessReview" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeSelfSubjectAccessReview.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.authorization.v1.SelfSubjectAccessReview".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeSelfSubjectAccessReview.GVK), props);
    }
}
exports.KubeSelfSubjectAccessReview = KubeSelfSubjectAccessReview;
/**
 * Returns the apiVersion and kind for "io.k8s.api.authorization.v1.SelfSubjectAccessReview"
 */
KubeSelfSubjectAccessReview.GVK = {
    apiVersion: 'authorization.k8s.io/v1',
    kind: 'SelfSubjectAccessReview',
};
/**
 * SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server's authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server.
 *
 * @schema io.k8s.api.authorization.v1.SelfSubjectRulesReview
 */
class KubeSelfSubjectRulesReview extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.authorization.v1.SelfSubjectRulesReview" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeSelfSubjectRulesReview.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.authorization.v1.SelfSubjectRulesReview".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeSelfSubjectRulesReview.GVK), props);
    }
}
exports.KubeSelfSubjectRulesReview = KubeSelfSubjectRulesReview;
/**
 * Returns the apiVersion and kind for "io.k8s.api.authorization.v1.SelfSubjectRulesReview"
 */
KubeSelfSubjectRulesReview.GVK = {
    apiVersion: 'authorization.k8s.io/v1',
    kind: 'SelfSubjectRulesReview',
};
/**
 * SubjectAccessReview checks whether or not a user or group can perform an action.
 *
 * @schema io.k8s.api.authorization.v1.SubjectAccessReview
 */
class KubeSubjectAccessReview extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.authorization.v1.SubjectAccessReview" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeSubjectAccessReview.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.authorization.v1.SubjectAccessReview".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeSubjectAccessReview.GVK), props);
    }
}
exports.KubeSubjectAccessReview = KubeSubjectAccessReview;
/**
 * Returns the apiVersion and kind for "io.k8s.api.authorization.v1.SubjectAccessReview"
 */
KubeSubjectAccessReview.GVK = {
    apiVersion: 'authorization.k8s.io/v1',
    kind: 'SubjectAccessReview',
};
/**
 * LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking.
 *
 * @schema io.k8s.api.authorization.v1beta1.LocalSubjectAccessReview
 */
class KubeLocalSubjectAccessReviewV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.authorization.v1beta1.LocalSubjectAccessReview" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeLocalSubjectAccessReviewV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.authorization.v1beta1.LocalSubjectAccessReview".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeLocalSubjectAccessReviewV1Beta1.GVK), props);
    }
}
exports.KubeLocalSubjectAccessReviewV1Beta1 = KubeLocalSubjectAccessReviewV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.authorization.v1beta1.LocalSubjectAccessReview"
 */
KubeLocalSubjectAccessReviewV1Beta1.GVK = {
    apiVersion: 'authorization.k8s.io/v1beta1',
    kind: 'LocalSubjectAccessReview',
};
/**
 * SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means "in all namespaces".  Self is a special case, because users should always be able to check whether they can perform an action
 *
 * @schema io.k8s.api.authorization.v1beta1.SelfSubjectAccessReview
 */
class KubeSelfSubjectAccessReviewV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.authorization.v1beta1.SelfSubjectAccessReview" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeSelfSubjectAccessReviewV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.authorization.v1beta1.SelfSubjectAccessReview".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeSelfSubjectAccessReviewV1Beta1.GVK), props);
    }
}
exports.KubeSelfSubjectAccessReviewV1Beta1 = KubeSelfSubjectAccessReviewV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.authorization.v1beta1.SelfSubjectAccessReview"
 */
KubeSelfSubjectAccessReviewV1Beta1.GVK = {
    apiVersion: 'authorization.k8s.io/v1beta1',
    kind: 'SelfSubjectAccessReview',
};
/**
 * SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server's authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server.
 *
 * @schema io.k8s.api.authorization.v1beta1.SelfSubjectRulesReview
 */
class KubeSelfSubjectRulesReviewV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.authorization.v1beta1.SelfSubjectRulesReview" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeSelfSubjectRulesReviewV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.authorization.v1beta1.SelfSubjectRulesReview".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeSelfSubjectRulesReviewV1Beta1.GVK), props);
    }
}
exports.KubeSelfSubjectRulesReviewV1Beta1 = KubeSelfSubjectRulesReviewV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.authorization.v1beta1.SelfSubjectRulesReview"
 */
KubeSelfSubjectRulesReviewV1Beta1.GVK = {
    apiVersion: 'authorization.k8s.io/v1beta1',
    kind: 'SelfSubjectRulesReview',
};
/**
 * SubjectAccessReview checks whether or not a user or group can perform an action.
 *
 * @schema io.k8s.api.authorization.v1beta1.SubjectAccessReview
 */
class KubeSubjectAccessReviewV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.authorization.v1beta1.SubjectAccessReview" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeSubjectAccessReviewV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.authorization.v1beta1.SubjectAccessReview".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeSubjectAccessReviewV1Beta1.GVK), props);
    }
}
exports.KubeSubjectAccessReviewV1Beta1 = KubeSubjectAccessReviewV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.authorization.v1beta1.SubjectAccessReview"
 */
KubeSubjectAccessReviewV1Beta1.GVK = {
    apiVersion: 'authorization.k8s.io/v1beta1',
    kind: 'SubjectAccessReview',
};
/**
 * configuration of a horizontal pod autoscaler.
 *
 * @schema io.k8s.api.autoscaling.v1.HorizontalPodAutoscaler
 */
class KubeHorizontalPodAutoscaler extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.autoscaling.v1.HorizontalPodAutoscaler" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeHorizontalPodAutoscaler.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.autoscaling.v1.HorizontalPodAutoscaler".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeHorizontalPodAutoscaler.GVK), props);
    }
}
exports.KubeHorizontalPodAutoscaler = KubeHorizontalPodAutoscaler;
/**
 * Returns the apiVersion and kind for "io.k8s.api.autoscaling.v1.HorizontalPodAutoscaler"
 */
KubeHorizontalPodAutoscaler.GVK = {
    apiVersion: 'autoscaling/v1',
    kind: 'HorizontalPodAutoscaler',
};
/**
 * list of horizontal pod autoscaler objects.
 *
 * @schema io.k8s.api.autoscaling.v1.HorizontalPodAutoscalerList
 */
class KubeHorizontalPodAutoscalerList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.autoscaling.v1.HorizontalPodAutoscalerList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeHorizontalPodAutoscalerList.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.autoscaling.v1.HorizontalPodAutoscalerList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeHorizontalPodAutoscalerList.GVK), props);
    }
}
exports.KubeHorizontalPodAutoscalerList = KubeHorizontalPodAutoscalerList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.autoscaling.v1.HorizontalPodAutoscalerList"
 */
KubeHorizontalPodAutoscalerList.GVK = {
    apiVersion: 'autoscaling/v1',
    kind: 'HorizontalPodAutoscalerList',
};
/**
 * Scale represents a scaling request for a resource.
 *
 * @schema io.k8s.api.autoscaling.v1.Scale
 */
class KubeScale extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.autoscaling.v1.Scale" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeScale.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.autoscaling.v1.Scale".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeScale.GVK), props);
    }
}
exports.KubeScale = KubeScale;
/**
 * Returns the apiVersion and kind for "io.k8s.api.autoscaling.v1.Scale"
 */
KubeScale.GVK = {
    apiVersion: 'autoscaling/v1',
    kind: 'Scale',
};
/**
 * HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified.
 *
 * @schema io.k8s.api.autoscaling.v2beta1.HorizontalPodAutoscaler
 */
class KubeHorizontalPodAutoscalerV2Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.autoscaling.v2beta1.HorizontalPodAutoscaler" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeHorizontalPodAutoscalerV2Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.autoscaling.v2beta1.HorizontalPodAutoscaler".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeHorizontalPodAutoscalerV2Beta1.GVK), props);
    }
}
exports.KubeHorizontalPodAutoscalerV2Beta1 = KubeHorizontalPodAutoscalerV2Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.autoscaling.v2beta1.HorizontalPodAutoscaler"
 */
KubeHorizontalPodAutoscalerV2Beta1.GVK = {
    apiVersion: 'autoscaling/v2beta1',
    kind: 'HorizontalPodAutoscaler',
};
/**
 * HorizontalPodAutoscaler is a list of horizontal pod autoscaler objects.
 *
 * @schema io.k8s.api.autoscaling.v2beta1.HorizontalPodAutoscalerList
 */
class KubeHorizontalPodAutoscalerListV2Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.autoscaling.v2beta1.HorizontalPodAutoscalerList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeHorizontalPodAutoscalerListV2Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.autoscaling.v2beta1.HorizontalPodAutoscalerList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeHorizontalPodAutoscalerListV2Beta1.GVK), props);
    }
}
exports.KubeHorizontalPodAutoscalerListV2Beta1 = KubeHorizontalPodAutoscalerListV2Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.autoscaling.v2beta1.HorizontalPodAutoscalerList"
 */
KubeHorizontalPodAutoscalerListV2Beta1.GVK = {
    apiVersion: 'autoscaling/v2beta1',
    kind: 'HorizontalPodAutoscalerList',
};
/**
 * HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified.
 *
 * @schema io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscaler
 */
class KubeHorizontalPodAutoscalerV2Beta2 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscaler" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeHorizontalPodAutoscalerV2Beta2.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscaler".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeHorizontalPodAutoscalerV2Beta2.GVK), props);
    }
}
exports.KubeHorizontalPodAutoscalerV2Beta2 = KubeHorizontalPodAutoscalerV2Beta2;
/**
 * Returns the apiVersion and kind for "io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscaler"
 */
KubeHorizontalPodAutoscalerV2Beta2.GVK = {
    apiVersion: 'autoscaling/v2beta2',
    kind: 'HorizontalPodAutoscaler',
};
/**
 * HorizontalPodAutoscalerList is a list of horizontal pod autoscaler objects.
 *
 * @schema io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscalerList
 */
class KubeHorizontalPodAutoscalerListV2Beta2 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscalerList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeHorizontalPodAutoscalerListV2Beta2.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscalerList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeHorizontalPodAutoscalerListV2Beta2.GVK), props);
    }
}
exports.KubeHorizontalPodAutoscalerListV2Beta2 = KubeHorizontalPodAutoscalerListV2Beta2;
/**
 * Returns the apiVersion and kind for "io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscalerList"
 */
KubeHorizontalPodAutoscalerListV2Beta2.GVK = {
    apiVersion: 'autoscaling/v2beta2',
    kind: 'HorizontalPodAutoscalerList',
};
/**
 * Job represents the configuration of a single job.
 *
 * @schema io.k8s.api.batch.v1.Job
 */
class KubeJob extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.batch.v1.Job" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeJob.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.batch.v1.Job".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeJob.GVK), props);
    }
}
exports.KubeJob = KubeJob;
/**
 * Returns the apiVersion and kind for "io.k8s.api.batch.v1.Job"
 */
KubeJob.GVK = {
    apiVersion: 'batch/v1',
    kind: 'Job',
};
/**
 * JobList is a collection of jobs.
 *
 * @schema io.k8s.api.batch.v1.JobList
 */
class KubeJobList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.batch.v1.JobList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeJobList.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.batch.v1.JobList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeJobList.GVK), props);
    }
}
exports.KubeJobList = KubeJobList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.batch.v1.JobList"
 */
KubeJobList.GVK = {
    apiVersion: 'batch/v1',
    kind: 'JobList',
};
/**
 * CronJob represents the configuration of a single cron job.
 *
 * @schema io.k8s.api.batch.v1beta1.CronJob
 */
class KubeCronJobV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.batch.v1beta1.CronJob" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeCronJobV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.batch.v1beta1.CronJob".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeCronJobV1Beta1.GVK), props);
    }
}
exports.KubeCronJobV1Beta1 = KubeCronJobV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.batch.v1beta1.CronJob"
 */
KubeCronJobV1Beta1.GVK = {
    apiVersion: 'batch/v1beta1',
    kind: 'CronJob',
};
/**
 * CronJobList is a collection of cron jobs.
 *
 * @schema io.k8s.api.batch.v1beta1.CronJobList
 */
class KubeCronJobListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.batch.v1beta1.CronJobList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeCronJobListV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.batch.v1beta1.CronJobList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeCronJobListV1Beta1.GVK), props);
    }
}
exports.KubeCronJobListV1Beta1 = KubeCronJobListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.batch.v1beta1.CronJobList"
 */
KubeCronJobListV1Beta1.GVK = {
    apiVersion: 'batch/v1beta1',
    kind: 'CronJobList',
};
/**
 * CronJob represents the configuration of a single cron job.
 *
 * @schema io.k8s.api.batch.v2alpha1.CronJob
 */
class KubeCronJobV2Alpha1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.batch.v2alpha1.CronJob" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeCronJobV2Alpha1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.batch.v2alpha1.CronJob".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeCronJobV2Alpha1.GVK), props);
    }
}
exports.KubeCronJobV2Alpha1 = KubeCronJobV2Alpha1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.batch.v2alpha1.CronJob"
 */
KubeCronJobV2Alpha1.GVK = {
    apiVersion: 'batch/v2alpha1',
    kind: 'CronJob',
};
/**
 * CronJobList is a collection of cron jobs.
 *
 * @schema io.k8s.api.batch.v2alpha1.CronJobList
 */
class KubeCronJobListV2Alpha1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.batch.v2alpha1.CronJobList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeCronJobListV2Alpha1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.batch.v2alpha1.CronJobList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeCronJobListV2Alpha1.GVK), props);
    }
}
exports.KubeCronJobListV2Alpha1 = KubeCronJobListV2Alpha1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.batch.v2alpha1.CronJobList"
 */
KubeCronJobListV2Alpha1.GVK = {
    apiVersion: 'batch/v2alpha1',
    kind: 'CronJobList',
};
/**
 * Describes a certificate signing request
 *
 * @schema io.k8s.api.certificates.v1beta1.CertificateSigningRequest
 */
class KubeCertificateSigningRequestV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.certificates.v1beta1.CertificateSigningRequest" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeCertificateSigningRequestV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.certificates.v1beta1.CertificateSigningRequest".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeCertificateSigningRequestV1Beta1.GVK), props);
    }
}
exports.KubeCertificateSigningRequestV1Beta1 = KubeCertificateSigningRequestV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.certificates.v1beta1.CertificateSigningRequest"
 */
KubeCertificateSigningRequestV1Beta1.GVK = {
    apiVersion: 'certificates.k8s.io/v1beta1',
    kind: 'CertificateSigningRequest',
};
/**
 *
 *
 * @schema io.k8s.api.certificates.v1beta1.CertificateSigningRequestList
 */
class KubeCertificateSigningRequestListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.certificates.v1beta1.CertificateSigningRequestList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeCertificateSigningRequestListV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.certificates.v1beta1.CertificateSigningRequestList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeCertificateSigningRequestListV1Beta1.GVK), props);
    }
}
exports.KubeCertificateSigningRequestListV1Beta1 = KubeCertificateSigningRequestListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.certificates.v1beta1.CertificateSigningRequestList"
 */
KubeCertificateSigningRequestListV1Beta1.GVK = {
    apiVersion: 'certificates.k8s.io/v1beta1',
    kind: 'CertificateSigningRequestList',
};
/**
 * Lease defines a lease concept.
 *
 * @schema io.k8s.api.coordination.v1.Lease
 */
class KubeLease extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.coordination.v1.Lease" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeLease.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.coordination.v1.Lease".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeLease.GVK), props);
    }
}
exports.KubeLease = KubeLease;
/**
 * Returns the apiVersion and kind for "io.k8s.api.coordination.v1.Lease"
 */
KubeLease.GVK = {
    apiVersion: 'coordination.k8s.io/v1',
    kind: 'Lease',
};
/**
 * LeaseList is a list of Lease objects.
 *
 * @schema io.k8s.api.coordination.v1.LeaseList
 */
class KubeLeaseList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.coordination.v1.LeaseList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeLeaseList.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.coordination.v1.LeaseList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeLeaseList.GVK), props);
    }
}
exports.KubeLeaseList = KubeLeaseList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.coordination.v1.LeaseList"
 */
KubeLeaseList.GVK = {
    apiVersion: 'coordination.k8s.io/v1',
    kind: 'LeaseList',
};
/**
 * Lease defines a lease concept.
 *
 * @schema io.k8s.api.coordination.v1beta1.Lease
 */
class KubeLeaseV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.coordination.v1beta1.Lease" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeLeaseV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.coordination.v1beta1.Lease".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeLeaseV1Beta1.GVK), props);
    }
}
exports.KubeLeaseV1Beta1 = KubeLeaseV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.coordination.v1beta1.Lease"
 */
KubeLeaseV1Beta1.GVK = {
    apiVersion: 'coordination.k8s.io/v1beta1',
    kind: 'Lease',
};
/**
 * LeaseList is a list of Lease objects.
 *
 * @schema io.k8s.api.coordination.v1beta1.LeaseList
 */
class KubeLeaseListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.coordination.v1beta1.LeaseList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeLeaseListV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.coordination.v1beta1.LeaseList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeLeaseListV1Beta1.GVK), props);
    }
}
exports.KubeLeaseListV1Beta1 = KubeLeaseListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.coordination.v1beta1.LeaseList"
 */
KubeLeaseListV1Beta1.GVK = {
    apiVersion: 'coordination.k8s.io/v1beta1',
    kind: 'LeaseList',
};
/**
 * Binding ties one object to another; for example, a pod is bound to a node by a scheduler. Deprecated in 1.7, please use the bindings subresource of pods instead.
 *
 * @schema io.k8s.api.core.v1.Binding
 */
class KubeBinding extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.Binding" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeBinding.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.Binding".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeBinding.GVK), props);
    }
}
exports.KubeBinding = KubeBinding;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.Binding"
 */
KubeBinding.GVK = {
    apiVersion: 'v1',
    kind: 'Binding',
};
/**
 * ComponentStatus (and ComponentStatusList) holds the cluster validation info.
 *
 * @schema io.k8s.api.core.v1.ComponentStatus
 */
class KubeComponentStatus extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.ComponentStatus" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeComponentStatus.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.ComponentStatus".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeComponentStatus.GVK), props);
    }
}
exports.KubeComponentStatus = KubeComponentStatus;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.ComponentStatus"
 */
KubeComponentStatus.GVK = {
    apiVersion: 'v1',
    kind: 'ComponentStatus',
};
/**
 * Status of all the conditions for the component as a list of ComponentStatus objects.
 *
 * @schema io.k8s.api.core.v1.ComponentStatusList
 */
class KubeComponentStatusList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.ComponentStatusList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeComponentStatusList.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.ComponentStatusList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeComponentStatusList.GVK), props);
    }
}
exports.KubeComponentStatusList = KubeComponentStatusList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.ComponentStatusList"
 */
KubeComponentStatusList.GVK = {
    apiVersion: 'v1',
    kind: 'ComponentStatusList',
};
/**
 * ConfigMap holds configuration data for pods to consume.
 *
 * @schema io.k8s.api.core.v1.ConfigMap
 */
class KubeConfigMap extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.ConfigMap" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeConfigMap.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.ConfigMap".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeConfigMap.GVK), props);
    }
}
exports.KubeConfigMap = KubeConfigMap;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.ConfigMap"
 */
KubeConfigMap.GVK = {
    apiVersion: 'v1',
    kind: 'ConfigMap',
};
/**
 * ConfigMapList is a resource containing a list of ConfigMap objects.
 *
 * @schema io.k8s.api.core.v1.ConfigMapList
 */
class KubeConfigMapList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.ConfigMapList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeConfigMapList.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.ConfigMapList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeConfigMapList.GVK), props);
    }
}
exports.KubeConfigMapList = KubeConfigMapList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.ConfigMapList"
 */
KubeConfigMapList.GVK = {
    apiVersion: 'v1',
    kind: 'ConfigMapList',
};
/**
 * Endpoints is a collection of endpoints that implement the actual service. Example:
  Name: "mysvc",
  Subsets: [
    {
      Addresses: [{"ip": "10.10.1.1"}, {"ip": "10.10.2.2"}],
      Ports: [{"name": "a", "port": 8675}, {"name": "b", "port": 309}]
    },
    {
      Addresses: [{"ip": "10.10.3.3"}],
      Ports: [{"name": "a", "port": 93}, {"name": "b", "port": 76}]
    },
 ]
 *
 * @schema io.k8s.api.core.v1.Endpoints
 */
class KubeEndpoints extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.Endpoints" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeEndpoints.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.Endpoints".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeEndpoints.GVK), props);
    }
}
exports.KubeEndpoints = KubeEndpoints;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.Endpoints"
 */
KubeEndpoints.GVK = {
    apiVersion: 'v1',
    kind: 'Endpoints',
};
/**
 * EndpointsList is a list of endpoints.
 *
 * @schema io.k8s.api.core.v1.EndpointsList
 */
class KubeEndpointsList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.EndpointsList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeEndpointsList.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.EndpointsList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeEndpointsList.GVK), props);
    }
}
exports.KubeEndpointsList = KubeEndpointsList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.EndpointsList"
 */
KubeEndpointsList.GVK = {
    apiVersion: 'v1',
    kind: 'EndpointsList',
};
/**
 * Event is a report of an event somewhere in the cluster.
 *
 * @schema io.k8s.api.core.v1.Event
 */
class KubeEvent extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.Event" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeEvent.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.Event".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeEvent.GVK), props);
    }
}
exports.KubeEvent = KubeEvent;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.Event"
 */
KubeEvent.GVK = {
    apiVersion: 'v1',
    kind: 'Event',
};
/**
 * EventList is a list of events.
 *
 * @schema io.k8s.api.core.v1.EventList
 */
class KubeEventList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.EventList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeEventList.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.EventList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeEventList.GVK), props);
    }
}
exports.KubeEventList = KubeEventList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.EventList"
 */
KubeEventList.GVK = {
    apiVersion: 'v1',
    kind: 'EventList',
};
/**
 * LimitRange sets resource usage limits for each kind of resource in a Namespace.
 *
 * @schema io.k8s.api.core.v1.LimitRange
 */
class KubeLimitRange extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.LimitRange" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeLimitRange.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.LimitRange".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeLimitRange.GVK), props);
    }
}
exports.KubeLimitRange = KubeLimitRange;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.LimitRange"
 */
KubeLimitRange.GVK = {
    apiVersion: 'v1',
    kind: 'LimitRange',
};
/**
 * LimitRangeList is a list of LimitRange items.
 *
 * @schema io.k8s.api.core.v1.LimitRangeList
 */
class KubeLimitRangeList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.LimitRangeList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeLimitRangeList.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.LimitRangeList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeLimitRangeList.GVK), props);
    }
}
exports.KubeLimitRangeList = KubeLimitRangeList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.LimitRangeList"
 */
KubeLimitRangeList.GVK = {
    apiVersion: 'v1',
    kind: 'LimitRangeList',
};
/**
 * Namespace provides a scope for Names. Use of multiple namespaces is optional.
 *
 * @schema io.k8s.api.core.v1.Namespace
 */
class KubeNamespace extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.Namespace" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeNamespace.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.Namespace".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeNamespace.GVK), props);
    }
}
exports.KubeNamespace = KubeNamespace;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.Namespace"
 */
KubeNamespace.GVK = {
    apiVersion: 'v1',
    kind: 'Namespace',
};
/**
 * NamespaceList is a list of Namespaces.
 *
 * @schema io.k8s.api.core.v1.NamespaceList
 */
class KubeNamespaceList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.NamespaceList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeNamespaceList.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.NamespaceList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeNamespaceList.GVK), props);
    }
}
exports.KubeNamespaceList = KubeNamespaceList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.NamespaceList"
 */
KubeNamespaceList.GVK = {
    apiVersion: 'v1',
    kind: 'NamespaceList',
};
/**
 * Node is a worker node in Kubernetes. Each node will have a unique identifier in the cache (i.e. in etcd).
 *
 * @schema io.k8s.api.core.v1.Node
 */
class KubeNode extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.Node" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeNode.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.Node".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeNode.GVK), props);
    }
}
exports.KubeNode = KubeNode;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.Node"
 */
KubeNode.GVK = {
    apiVersion: 'v1',
    kind: 'Node',
};
/**
 * NodeList is the whole list of all Nodes which have been registered with master.
 *
 * @schema io.k8s.api.core.v1.NodeList
 */
class KubeNodeList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.NodeList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeNodeList.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.NodeList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeNodeList.GVK), props);
    }
}
exports.KubeNodeList = KubeNodeList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.NodeList"
 */
KubeNodeList.GVK = {
    apiVersion: 'v1',
    kind: 'NodeList',
};
/**
 * PersistentVolume (PV) is a storage resource provisioned by an administrator. It is analogous to a node. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes
 *
 * @schema io.k8s.api.core.v1.PersistentVolume
 */
class KubePersistentVolume extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.PersistentVolume" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubePersistentVolume.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.PersistentVolume".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubePersistentVolume.GVK), props);
    }
}
exports.KubePersistentVolume = KubePersistentVolume;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.PersistentVolume"
 */
KubePersistentVolume.GVK = {
    apiVersion: 'v1',
    kind: 'PersistentVolume',
};
/**
 * PersistentVolumeClaim is a user's request for and claim to a persistent volume
 *
 * @schema io.k8s.api.core.v1.PersistentVolumeClaim
 */
class KubePersistentVolumeClaim extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.PersistentVolumeClaim" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubePersistentVolumeClaim.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.PersistentVolumeClaim".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubePersistentVolumeClaim.GVK), props);
    }
}
exports.KubePersistentVolumeClaim = KubePersistentVolumeClaim;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.PersistentVolumeClaim"
 */
KubePersistentVolumeClaim.GVK = {
    apiVersion: 'v1',
    kind: 'PersistentVolumeClaim',
};
/**
 * PersistentVolumeClaimList is a list of PersistentVolumeClaim items.
 *
 * @schema io.k8s.api.core.v1.PersistentVolumeClaimList
 */
class KubePersistentVolumeClaimList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.PersistentVolumeClaimList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubePersistentVolumeClaimList.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.PersistentVolumeClaimList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubePersistentVolumeClaimList.GVK), props);
    }
}
exports.KubePersistentVolumeClaimList = KubePersistentVolumeClaimList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.PersistentVolumeClaimList"
 */
KubePersistentVolumeClaimList.GVK = {
    apiVersion: 'v1',
    kind: 'PersistentVolumeClaimList',
};
/**
 * PersistentVolumeList is a list of PersistentVolume items.
 *
 * @schema io.k8s.api.core.v1.PersistentVolumeList
 */
class KubePersistentVolumeList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.PersistentVolumeList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubePersistentVolumeList.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.PersistentVolumeList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubePersistentVolumeList.GVK), props);
    }
}
exports.KubePersistentVolumeList = KubePersistentVolumeList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.PersistentVolumeList"
 */
KubePersistentVolumeList.GVK = {
    apiVersion: 'v1',
    kind: 'PersistentVolumeList',
};
/**
 * Pod is a collection of containers that can run on a host. This resource is created by clients and scheduled onto hosts.
 *
 * @schema io.k8s.api.core.v1.Pod
 */
class KubePod extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.Pod" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubePod.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.Pod".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubePod.GVK), props);
    }
}
exports.KubePod = KubePod;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.Pod"
 */
KubePod.GVK = {
    apiVersion: 'v1',
    kind: 'Pod',
};
/**
 * PodList is a list of Pods.
 *
 * @schema io.k8s.api.core.v1.PodList
 */
class KubePodList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.PodList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubePodList.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.PodList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubePodList.GVK), props);
    }
}
exports.KubePodList = KubePodList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.PodList"
 */
KubePodList.GVK = {
    apiVersion: 'v1',
    kind: 'PodList',
};
/**
 * PodTemplate describes a template for creating copies of a predefined pod.
 *
 * @schema io.k8s.api.core.v1.PodTemplate
 */
class KubePodTemplate extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.PodTemplate" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubePodTemplate.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.PodTemplate".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubePodTemplate.GVK), props);
    }
}
exports.KubePodTemplate = KubePodTemplate;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.PodTemplate"
 */
KubePodTemplate.GVK = {
    apiVersion: 'v1',
    kind: 'PodTemplate',
};
/**
 * PodTemplateList is a list of PodTemplates.
 *
 * @schema io.k8s.api.core.v1.PodTemplateList
 */
class KubePodTemplateList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.PodTemplateList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubePodTemplateList.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.PodTemplateList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubePodTemplateList.GVK), props);
    }
}
exports.KubePodTemplateList = KubePodTemplateList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.PodTemplateList"
 */
KubePodTemplateList.GVK = {
    apiVersion: 'v1',
    kind: 'PodTemplateList',
};
/**
 * ReplicationController represents the configuration of a replication controller.
 *
 * @schema io.k8s.api.core.v1.ReplicationController
 */
class KubeReplicationController extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.ReplicationController" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeReplicationController.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.ReplicationController".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeReplicationController.GVK), props);
    }
}
exports.KubeReplicationController = KubeReplicationController;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.ReplicationController"
 */
KubeReplicationController.GVK = {
    apiVersion: 'v1',
    kind: 'ReplicationController',
};
/**
 * ReplicationControllerList is a collection of replication controllers.
 *
 * @schema io.k8s.api.core.v1.ReplicationControllerList
 */
class KubeReplicationControllerList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.ReplicationControllerList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeReplicationControllerList.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.ReplicationControllerList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeReplicationControllerList.GVK), props);
    }
}
exports.KubeReplicationControllerList = KubeReplicationControllerList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.ReplicationControllerList"
 */
KubeReplicationControllerList.GVK = {
    apiVersion: 'v1',
    kind: 'ReplicationControllerList',
};
/**
 * ResourceQuota sets aggregate quota restrictions enforced per namespace
 *
 * @schema io.k8s.api.core.v1.ResourceQuota
 */
class KubeResourceQuota extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.ResourceQuota" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeResourceQuota.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.ResourceQuota".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeResourceQuota.GVK), props);
    }
}
exports.KubeResourceQuota = KubeResourceQuota;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.ResourceQuota"
 */
KubeResourceQuota.GVK = {
    apiVersion: 'v1',
    kind: 'ResourceQuota',
};
/**
 * ResourceQuotaList is a list of ResourceQuota items.
 *
 * @schema io.k8s.api.core.v1.ResourceQuotaList
 */
class KubeResourceQuotaList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.ResourceQuotaList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeResourceQuotaList.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.ResourceQuotaList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeResourceQuotaList.GVK), props);
    }
}
exports.KubeResourceQuotaList = KubeResourceQuotaList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.ResourceQuotaList"
 */
KubeResourceQuotaList.GVK = {
    apiVersion: 'v1',
    kind: 'ResourceQuotaList',
};
/**
 * Secret holds secret data of a certain type. The total bytes of the values in the Data field must be less than MaxSecretSize bytes.
 *
 * @schema io.k8s.api.core.v1.Secret
 */
class KubeSecret extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.Secret" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeSecret.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.Secret".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeSecret.GVK), props);
    }
}
exports.KubeSecret = KubeSecret;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.Secret"
 */
KubeSecret.GVK = {
    apiVersion: 'v1',
    kind: 'Secret',
};
/**
 * SecretList is a list of Secret.
 *
 * @schema io.k8s.api.core.v1.SecretList
 */
class KubeSecretList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.SecretList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeSecretList.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.SecretList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeSecretList.GVK), props);
    }
}
exports.KubeSecretList = KubeSecretList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.SecretList"
 */
KubeSecretList.GVK = {
    apiVersion: 'v1',
    kind: 'SecretList',
};
/**
 * Service is a named abstraction of software service (for example, mysql) consisting of local port (for example 3306) that the proxy listens on, and the selector that determines which pods will answer requests sent through the proxy.
 *
 * @schema io.k8s.api.core.v1.Service
 */
class KubeService extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.Service" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeService.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.Service".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeService.GVK), props);
    }
}
exports.KubeService = KubeService;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.Service"
 */
KubeService.GVK = {
    apiVersion: 'v1',
    kind: 'Service',
};
/**
 * ServiceAccount binds together: * a name, understood by users, and perhaps by peripheral systems, for an identity * a principal that can be authenticated and authorized * a set of secrets
 *
 * @schema io.k8s.api.core.v1.ServiceAccount
 */
class KubeServiceAccount extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.ServiceAccount" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeServiceAccount.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.ServiceAccount".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeServiceAccount.GVK), props);
    }
}
exports.KubeServiceAccount = KubeServiceAccount;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.ServiceAccount"
 */
KubeServiceAccount.GVK = {
    apiVersion: 'v1',
    kind: 'ServiceAccount',
};
/**
 * ServiceAccountList is a list of ServiceAccount objects
 *
 * @schema io.k8s.api.core.v1.ServiceAccountList
 */
class KubeServiceAccountList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.ServiceAccountList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeServiceAccountList.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.ServiceAccountList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeServiceAccountList.GVK), props);
    }
}
exports.KubeServiceAccountList = KubeServiceAccountList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.ServiceAccountList"
 */
KubeServiceAccountList.GVK = {
    apiVersion: 'v1',
    kind: 'ServiceAccountList',
};
/**
 * ServiceList holds a list of services.
 *
 * @schema io.k8s.api.core.v1.ServiceList
 */
class KubeServiceList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.ServiceList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeServiceList.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.ServiceList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeServiceList.GVK), props);
    }
}
exports.KubeServiceList = KubeServiceList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.ServiceList"
 */
KubeServiceList.GVK = {
    apiVersion: 'v1',
    kind: 'ServiceList',
};
/**
 * Event is a report of an event somewhere in the cluster. It generally denotes some state change in the system.
 *
 * @schema io.k8s.api.events.v1beta1.Event
 */
class KubeEventV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.events.v1beta1.Event" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeEventV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.events.v1beta1.Event".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeEventV1Beta1.GVK), props);
    }
}
exports.KubeEventV1Beta1 = KubeEventV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.events.v1beta1.Event"
 */
KubeEventV1Beta1.GVK = {
    apiVersion: 'events.k8s.io/v1beta1',
    kind: 'Event',
};
/**
 * EventList is a list of Event objects.
 *
 * @schema io.k8s.api.events.v1beta1.EventList
 */
class KubeEventListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.events.v1beta1.EventList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeEventListV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.events.v1beta1.EventList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeEventListV1Beta1.GVK), props);
    }
}
exports.KubeEventListV1Beta1 = KubeEventListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.events.v1beta1.EventList"
 */
KubeEventListV1Beta1.GVK = {
    apiVersion: 'events.k8s.io/v1beta1',
    kind: 'EventList',
};
/**
 * DEPRECATED - This group version of DaemonSet is deprecated by apps/v1beta2/DaemonSet. See the release notes for more information. DaemonSet represents the configuration of a daemon set.
 *
 * @schema io.k8s.api.extensions.v1beta1.DaemonSet
 */
class KubeDaemonSetV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.extensions.v1beta1.DaemonSet" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeDaemonSetV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.extensions.v1beta1.DaemonSet".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeDaemonSetV1Beta1.GVK), props);
    }
}
exports.KubeDaemonSetV1Beta1 = KubeDaemonSetV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.extensions.v1beta1.DaemonSet"
 */
KubeDaemonSetV1Beta1.GVK = {
    apiVersion: 'extensions/v1beta1',
    kind: 'DaemonSet',
};
/**
 * DaemonSetList is a collection of daemon sets.
 *
 * @schema io.k8s.api.extensions.v1beta1.DaemonSetList
 */
class KubeDaemonSetListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.extensions.v1beta1.DaemonSetList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeDaemonSetListV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.extensions.v1beta1.DaemonSetList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeDaemonSetListV1Beta1.GVK), props);
    }
}
exports.KubeDaemonSetListV1Beta1 = KubeDaemonSetListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.extensions.v1beta1.DaemonSetList"
 */
KubeDaemonSetListV1Beta1.GVK = {
    apiVersion: 'extensions/v1beta1',
    kind: 'DaemonSetList',
};
/**
 * Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc.
 *
 * @schema io.k8s.api.networking.v1beta1.Ingress
 */
class KubeIngressV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.networking.v1beta1.Ingress" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeIngressV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.networking.v1beta1.Ingress".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeIngressV1Beta1.GVK), props);
    }
}
exports.KubeIngressV1Beta1 = KubeIngressV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.networking.v1beta1.Ingress"
 */
KubeIngressV1Beta1.GVK = {
    apiVersion: 'networking.k8s.io/v1beta1',
    kind: 'Ingress',
};
/**
 * IngressList is a collection of Ingress.
 *
 * @schema io.k8s.api.networking.v1beta1.IngressList
 */
class KubeIngressListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.networking.v1beta1.IngressList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeIngressListV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.networking.v1beta1.IngressList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeIngressListV1Beta1.GVK), props);
    }
}
exports.KubeIngressListV1Beta1 = KubeIngressListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.networking.v1beta1.IngressList"
 */
KubeIngressListV1Beta1.GVK = {
    apiVersion: 'networking.k8s.io/v1beta1',
    kind: 'IngressList',
};
/**
 * DEPRECATED 1.9 - This group version of NetworkPolicy is deprecated by networking/v1/NetworkPolicy. NetworkPolicy describes what network traffic is allowed for a set of Pods
 *
 * @schema io.k8s.api.extensions.v1beta1.NetworkPolicy
 */
class KubeNetworkPolicyV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.extensions.v1beta1.NetworkPolicy" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeNetworkPolicyV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.extensions.v1beta1.NetworkPolicy".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeNetworkPolicyV1Beta1.GVK), props);
    }
}
exports.KubeNetworkPolicyV1Beta1 = KubeNetworkPolicyV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.extensions.v1beta1.NetworkPolicy"
 */
KubeNetworkPolicyV1Beta1.GVK = {
    apiVersion: 'extensions/v1beta1',
    kind: 'NetworkPolicy',
};
/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyList is deprecated by networking/v1/NetworkPolicyList. Network Policy List is a list of NetworkPolicy objects.
 *
 * @schema io.k8s.api.extensions.v1beta1.NetworkPolicyList
 */
class KubeNetworkPolicyListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.extensions.v1beta1.NetworkPolicyList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeNetworkPolicyListV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.extensions.v1beta1.NetworkPolicyList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeNetworkPolicyListV1Beta1.GVK), props);
    }
}
exports.KubeNetworkPolicyListV1Beta1 = KubeNetworkPolicyListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.extensions.v1beta1.NetworkPolicyList"
 */
KubeNetworkPolicyListV1Beta1.GVK = {
    apiVersion: 'extensions/v1beta1',
    kind: 'NetworkPolicyList',
};
/**
 * PodSecurityPolicy governs the ability to make requests that affect the Security Context that will be applied to a pod and container.
 *
 * @schema io.k8s.api.policy.v1beta1.PodSecurityPolicy
 */
class KubePodSecurityPolicyV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.policy.v1beta1.PodSecurityPolicy" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubePodSecurityPolicyV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.policy.v1beta1.PodSecurityPolicy".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubePodSecurityPolicyV1Beta1.GVK), props);
    }
}
exports.KubePodSecurityPolicyV1Beta1 = KubePodSecurityPolicyV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.policy.v1beta1.PodSecurityPolicy"
 */
KubePodSecurityPolicyV1Beta1.GVK = {
    apiVersion: 'policy/v1beta1',
    kind: 'PodSecurityPolicy',
};
/**
 * PodSecurityPolicyList is a list of PodSecurityPolicy objects.
 *
 * @schema io.k8s.api.policy.v1beta1.PodSecurityPolicyList
 */
class KubePodSecurityPolicyListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.policy.v1beta1.PodSecurityPolicyList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubePodSecurityPolicyListV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.policy.v1beta1.PodSecurityPolicyList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubePodSecurityPolicyListV1Beta1.GVK), props);
    }
}
exports.KubePodSecurityPolicyListV1Beta1 = KubePodSecurityPolicyListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.policy.v1beta1.PodSecurityPolicyList"
 */
KubePodSecurityPolicyListV1Beta1.GVK = {
    apiVersion: 'policy/v1beta1',
    kind: 'PodSecurityPolicyList',
};
/**
 * DEPRECATED - This group version of ReplicaSet is deprecated by apps/v1beta2/ReplicaSet. See the release notes for more information. ReplicaSet ensures that a specified number of pod replicas are running at any given time.
 *
 * @schema io.k8s.api.extensions.v1beta1.ReplicaSet
 */
class KubeReplicaSetV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.extensions.v1beta1.ReplicaSet" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeReplicaSetV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.extensions.v1beta1.ReplicaSet".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeReplicaSetV1Beta1.GVK), props);
    }
}
exports.KubeReplicaSetV1Beta1 = KubeReplicaSetV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.extensions.v1beta1.ReplicaSet"
 */
KubeReplicaSetV1Beta1.GVK = {
    apiVersion: 'extensions/v1beta1',
    kind: 'ReplicaSet',
};
/**
 * ReplicaSetList is a collection of ReplicaSets.
 *
 * @schema io.k8s.api.extensions.v1beta1.ReplicaSetList
 */
class KubeReplicaSetListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.extensions.v1beta1.ReplicaSetList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeReplicaSetListV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.extensions.v1beta1.ReplicaSetList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeReplicaSetListV1Beta1.GVK), props);
    }
}
exports.KubeReplicaSetListV1Beta1 = KubeReplicaSetListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.extensions.v1beta1.ReplicaSetList"
 */
KubeReplicaSetListV1Beta1.GVK = {
    apiVersion: 'extensions/v1beta1',
    kind: 'ReplicaSetList',
};
/**
 * NetworkPolicy describes what network traffic is allowed for a set of Pods
 *
 * @schema io.k8s.api.networking.v1.NetworkPolicy
 */
class KubeNetworkPolicy extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.networking.v1.NetworkPolicy" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeNetworkPolicy.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.networking.v1.NetworkPolicy".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeNetworkPolicy.GVK), props);
    }
}
exports.KubeNetworkPolicy = KubeNetworkPolicy;
/**
 * Returns the apiVersion and kind for "io.k8s.api.networking.v1.NetworkPolicy"
 */
KubeNetworkPolicy.GVK = {
    apiVersion: 'networking.k8s.io/v1',
    kind: 'NetworkPolicy',
};
/**
 * NetworkPolicyList is a list of NetworkPolicy objects.
 *
 * @schema io.k8s.api.networking.v1.NetworkPolicyList
 */
class KubeNetworkPolicyList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.networking.v1.NetworkPolicyList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeNetworkPolicyList.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.networking.v1.NetworkPolicyList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeNetworkPolicyList.GVK), props);
    }
}
exports.KubeNetworkPolicyList = KubeNetworkPolicyList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.networking.v1.NetworkPolicyList"
 */
KubeNetworkPolicyList.GVK = {
    apiVersion: 'networking.k8s.io/v1',
    kind: 'NetworkPolicyList',
};
/**
 * RuntimeClass defines a class of container runtime supported in the cluster. The RuntimeClass is used to determine which container runtime is used to run all containers in a pod. RuntimeClasses are (currently) manually defined by a user or cluster provisioner, and referenced in the PodSpec. The Kubelet is responsible for resolving the RuntimeClassName reference before running the pod.  For more details, see https://git.k8s.io/enhancements/keps/sig-node/runtime-class.md
 *
 * @schema io.k8s.api.node.v1alpha1.RuntimeClass
 */
class KubeRuntimeClassV1Alpha1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.node.v1alpha1.RuntimeClass" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeRuntimeClassV1Alpha1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.node.v1alpha1.RuntimeClass".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeRuntimeClassV1Alpha1.GVK), props);
    }
}
exports.KubeRuntimeClassV1Alpha1 = KubeRuntimeClassV1Alpha1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.node.v1alpha1.RuntimeClass"
 */
KubeRuntimeClassV1Alpha1.GVK = {
    apiVersion: 'node.k8s.io/v1alpha1',
    kind: 'RuntimeClass',
};
/**
 * RuntimeClassList is a list of RuntimeClass objects.
 *
 * @schema io.k8s.api.node.v1alpha1.RuntimeClassList
 */
class KubeRuntimeClassListV1Alpha1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.node.v1alpha1.RuntimeClassList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeRuntimeClassListV1Alpha1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.node.v1alpha1.RuntimeClassList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeRuntimeClassListV1Alpha1.GVK), props);
    }
}
exports.KubeRuntimeClassListV1Alpha1 = KubeRuntimeClassListV1Alpha1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.node.v1alpha1.RuntimeClassList"
 */
KubeRuntimeClassListV1Alpha1.GVK = {
    apiVersion: 'node.k8s.io/v1alpha1',
    kind: 'RuntimeClassList',
};
/**
 * RuntimeClass defines a class of container runtime supported in the cluster. The RuntimeClass is used to determine which container runtime is used to run all containers in a pod. RuntimeClasses are (currently) manually defined by a user or cluster provisioner, and referenced in the PodSpec. The Kubelet is responsible for resolving the RuntimeClassName reference before running the pod.  For more details, see https://git.k8s.io/enhancements/keps/sig-node/runtime-class.md
 *
 * @schema io.k8s.api.node.v1beta1.RuntimeClass
 */
class KubeRuntimeClassV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.node.v1beta1.RuntimeClass" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeRuntimeClassV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.node.v1beta1.RuntimeClass".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeRuntimeClassV1Beta1.GVK), props);
    }
}
exports.KubeRuntimeClassV1Beta1 = KubeRuntimeClassV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.node.v1beta1.RuntimeClass"
 */
KubeRuntimeClassV1Beta1.GVK = {
    apiVersion: 'node.k8s.io/v1beta1',
    kind: 'RuntimeClass',
};
/**
 * RuntimeClassList is a list of RuntimeClass objects.
 *
 * @schema io.k8s.api.node.v1beta1.RuntimeClassList
 */
class KubeRuntimeClassListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.node.v1beta1.RuntimeClassList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeRuntimeClassListV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.node.v1beta1.RuntimeClassList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeRuntimeClassListV1Beta1.GVK), props);
    }
}
exports.KubeRuntimeClassListV1Beta1 = KubeRuntimeClassListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.node.v1beta1.RuntimeClassList"
 */
KubeRuntimeClassListV1Beta1.GVK = {
    apiVersion: 'node.k8s.io/v1beta1',
    kind: 'RuntimeClassList',
};
/**
 * Eviction evicts a pod from its node subject to certain policies and safety constraints. This is a subresource of Pod.  A request to cause such an eviction is created by POSTing to .../pods/<pod name>/evictions.
 *
 * @schema io.k8s.api.policy.v1beta1.Eviction
 */
class KubeEvictionV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.policy.v1beta1.Eviction" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeEvictionV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.policy.v1beta1.Eviction".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeEvictionV1Beta1.GVK), props);
    }
}
exports.KubeEvictionV1Beta1 = KubeEvictionV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.policy.v1beta1.Eviction"
 */
KubeEvictionV1Beta1.GVK = {
    apiVersion: 'policy/v1beta1',
    kind: 'Eviction',
};
/**
 * PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods
 *
 * @schema io.k8s.api.policy.v1beta1.PodDisruptionBudget
 */
class KubePodDisruptionBudgetV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.policy.v1beta1.PodDisruptionBudget" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubePodDisruptionBudgetV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.policy.v1beta1.PodDisruptionBudget".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubePodDisruptionBudgetV1Beta1.GVK), props);
    }
}
exports.KubePodDisruptionBudgetV1Beta1 = KubePodDisruptionBudgetV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.policy.v1beta1.PodDisruptionBudget"
 */
KubePodDisruptionBudgetV1Beta1.GVK = {
    apiVersion: 'policy/v1beta1',
    kind: 'PodDisruptionBudget',
};
/**
 * PodDisruptionBudgetList is a collection of PodDisruptionBudgets.
 *
 * @schema io.k8s.api.policy.v1beta1.PodDisruptionBudgetList
 */
class KubePodDisruptionBudgetListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.policy.v1beta1.PodDisruptionBudgetList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubePodDisruptionBudgetListV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.policy.v1beta1.PodDisruptionBudgetList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubePodDisruptionBudgetListV1Beta1.GVK), props);
    }
}
exports.KubePodDisruptionBudgetListV1Beta1 = KubePodDisruptionBudgetListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.policy.v1beta1.PodDisruptionBudgetList"
 */
KubePodDisruptionBudgetListV1Beta1.GVK = {
    apiVersion: 'policy/v1beta1',
    kind: 'PodDisruptionBudgetList',
};
/**
 * ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
 *
 * @schema io.k8s.api.rbac.v1.ClusterRole
 */
class KubeClusterRole extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.rbac.v1.ClusterRole" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeClusterRole.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1.ClusterRole".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeClusterRole.GVK), props);
    }
}
exports.KubeClusterRole = KubeClusterRole;
/**
 * Returns the apiVersion and kind for "io.k8s.api.rbac.v1.ClusterRole"
 */
KubeClusterRole.GVK = {
    apiVersion: 'rbac.authorization.k8s.io/v1',
    kind: 'ClusterRole',
};
/**
 * ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.
 *
 * @schema io.k8s.api.rbac.v1.ClusterRoleBinding
 */
class KubeClusterRoleBinding extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.rbac.v1.ClusterRoleBinding" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeClusterRoleBinding.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1.ClusterRoleBinding".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeClusterRoleBinding.GVK), props);
    }
}
exports.KubeClusterRoleBinding = KubeClusterRoleBinding;
/**
 * Returns the apiVersion and kind for "io.k8s.api.rbac.v1.ClusterRoleBinding"
 */
KubeClusterRoleBinding.GVK = {
    apiVersion: 'rbac.authorization.k8s.io/v1',
    kind: 'ClusterRoleBinding',
};
/**
 * ClusterRoleBindingList is a collection of ClusterRoleBindings
 *
 * @schema io.k8s.api.rbac.v1.ClusterRoleBindingList
 */
class KubeClusterRoleBindingList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.rbac.v1.ClusterRoleBindingList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeClusterRoleBindingList.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1.ClusterRoleBindingList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeClusterRoleBindingList.GVK), props);
    }
}
exports.KubeClusterRoleBindingList = KubeClusterRoleBindingList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.rbac.v1.ClusterRoleBindingList"
 */
KubeClusterRoleBindingList.GVK = {
    apiVersion: 'rbac.authorization.k8s.io/v1',
    kind: 'ClusterRoleBindingList',
};
/**
 * ClusterRoleList is a collection of ClusterRoles
 *
 * @schema io.k8s.api.rbac.v1.ClusterRoleList
 */
class KubeClusterRoleList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.rbac.v1.ClusterRoleList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeClusterRoleList.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1.ClusterRoleList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeClusterRoleList.GVK), props);
    }
}
exports.KubeClusterRoleList = KubeClusterRoleList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.rbac.v1.ClusterRoleList"
 */
KubeClusterRoleList.GVK = {
    apiVersion: 'rbac.authorization.k8s.io/v1',
    kind: 'ClusterRoleList',
};
/**
 * Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.
 *
 * @schema io.k8s.api.rbac.v1.Role
 */
class KubeRole extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.rbac.v1.Role" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeRole.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1.Role".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeRole.GVK), props);
    }
}
exports.KubeRole = KubeRole;
/**
 * Returns the apiVersion and kind for "io.k8s.api.rbac.v1.Role"
 */
KubeRole.GVK = {
    apiVersion: 'rbac.authorization.k8s.io/v1',
    kind: 'Role',
};
/**
 * RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace.
 *
 * @schema io.k8s.api.rbac.v1.RoleBinding
 */
class KubeRoleBinding extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.rbac.v1.RoleBinding" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeRoleBinding.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1.RoleBinding".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeRoleBinding.GVK), props);
    }
}
exports.KubeRoleBinding = KubeRoleBinding;
/**
 * Returns the apiVersion and kind for "io.k8s.api.rbac.v1.RoleBinding"
 */
KubeRoleBinding.GVK = {
    apiVersion: 'rbac.authorization.k8s.io/v1',
    kind: 'RoleBinding',
};
/**
 * RoleBindingList is a collection of RoleBindings
 *
 * @schema io.k8s.api.rbac.v1.RoleBindingList
 */
class KubeRoleBindingList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.rbac.v1.RoleBindingList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeRoleBindingList.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1.RoleBindingList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeRoleBindingList.GVK), props);
    }
}
exports.KubeRoleBindingList = KubeRoleBindingList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.rbac.v1.RoleBindingList"
 */
KubeRoleBindingList.GVK = {
    apiVersion: 'rbac.authorization.k8s.io/v1',
    kind: 'RoleBindingList',
};
/**
 * RoleList is a collection of Roles
 *
 * @schema io.k8s.api.rbac.v1.RoleList
 */
class KubeRoleList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.rbac.v1.RoleList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeRoleList.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1.RoleList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeRoleList.GVK), props);
    }
}
exports.KubeRoleList = KubeRoleList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.rbac.v1.RoleList"
 */
KubeRoleList.GVK = {
    apiVersion: 'rbac.authorization.k8s.io/v1',
    kind: 'RoleList',
};
/**
 * ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
 *
 * @schema io.k8s.api.rbac.v1alpha1.ClusterRole
 */
class KubeClusterRoleV1Alpha1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.rbac.v1alpha1.ClusterRole" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeClusterRoleV1Alpha1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1alpha1.ClusterRole".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeClusterRoleV1Alpha1.GVK), props);
    }
}
exports.KubeClusterRoleV1Alpha1 = KubeClusterRoleV1Alpha1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.rbac.v1alpha1.ClusterRole"
 */
KubeClusterRoleV1Alpha1.GVK = {
    apiVersion: 'rbac.authorization.k8s.io/v1alpha1',
    kind: 'ClusterRole',
};
/**
 * ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.
 *
 * @schema io.k8s.api.rbac.v1alpha1.ClusterRoleBinding
 */
class KubeClusterRoleBindingV1Alpha1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.rbac.v1alpha1.ClusterRoleBinding" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeClusterRoleBindingV1Alpha1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1alpha1.ClusterRoleBinding".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeClusterRoleBindingV1Alpha1.GVK), props);
    }
}
exports.KubeClusterRoleBindingV1Alpha1 = KubeClusterRoleBindingV1Alpha1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.rbac.v1alpha1.ClusterRoleBinding"
 */
KubeClusterRoleBindingV1Alpha1.GVK = {
    apiVersion: 'rbac.authorization.k8s.io/v1alpha1',
    kind: 'ClusterRoleBinding',
};
/**
 * ClusterRoleBindingList is a collection of ClusterRoleBindings
 *
 * @schema io.k8s.api.rbac.v1alpha1.ClusterRoleBindingList
 */
class KubeClusterRoleBindingListV1Alpha1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.rbac.v1alpha1.ClusterRoleBindingList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeClusterRoleBindingListV1Alpha1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1alpha1.ClusterRoleBindingList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeClusterRoleBindingListV1Alpha1.GVK), props);
    }
}
exports.KubeClusterRoleBindingListV1Alpha1 = KubeClusterRoleBindingListV1Alpha1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.rbac.v1alpha1.ClusterRoleBindingList"
 */
KubeClusterRoleBindingListV1Alpha1.GVK = {
    apiVersion: 'rbac.authorization.k8s.io/v1alpha1',
    kind: 'ClusterRoleBindingList',
};
/**
 * ClusterRoleList is a collection of ClusterRoles
 *
 * @schema io.k8s.api.rbac.v1alpha1.ClusterRoleList
 */
class KubeClusterRoleListV1Alpha1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.rbac.v1alpha1.ClusterRoleList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeClusterRoleListV1Alpha1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1alpha1.ClusterRoleList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeClusterRoleListV1Alpha1.GVK), props);
    }
}
exports.KubeClusterRoleListV1Alpha1 = KubeClusterRoleListV1Alpha1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.rbac.v1alpha1.ClusterRoleList"
 */
KubeClusterRoleListV1Alpha1.GVK = {
    apiVersion: 'rbac.authorization.k8s.io/v1alpha1',
    kind: 'ClusterRoleList',
};
/**
 * Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.
 *
 * @schema io.k8s.api.rbac.v1alpha1.Role
 */
class KubeRoleV1Alpha1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.rbac.v1alpha1.Role" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeRoleV1Alpha1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1alpha1.Role".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeRoleV1Alpha1.GVK), props);
    }
}
exports.KubeRoleV1Alpha1 = KubeRoleV1Alpha1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.rbac.v1alpha1.Role"
 */
KubeRoleV1Alpha1.GVK = {
    apiVersion: 'rbac.authorization.k8s.io/v1alpha1',
    kind: 'Role',
};
/**
 * RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace.
 *
 * @schema io.k8s.api.rbac.v1alpha1.RoleBinding
 */
class KubeRoleBindingV1Alpha1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.rbac.v1alpha1.RoleBinding" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeRoleBindingV1Alpha1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1alpha1.RoleBinding".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeRoleBindingV1Alpha1.GVK), props);
    }
}
exports.KubeRoleBindingV1Alpha1 = KubeRoleBindingV1Alpha1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.rbac.v1alpha1.RoleBinding"
 */
KubeRoleBindingV1Alpha1.GVK = {
    apiVersion: 'rbac.authorization.k8s.io/v1alpha1',
    kind: 'RoleBinding',
};
/**
 * RoleBindingList is a collection of RoleBindings
 *
 * @schema io.k8s.api.rbac.v1alpha1.RoleBindingList
 */
class KubeRoleBindingListV1Alpha1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.rbac.v1alpha1.RoleBindingList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeRoleBindingListV1Alpha1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1alpha1.RoleBindingList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeRoleBindingListV1Alpha1.GVK), props);
    }
}
exports.KubeRoleBindingListV1Alpha1 = KubeRoleBindingListV1Alpha1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.rbac.v1alpha1.RoleBindingList"
 */
KubeRoleBindingListV1Alpha1.GVK = {
    apiVersion: 'rbac.authorization.k8s.io/v1alpha1',
    kind: 'RoleBindingList',
};
/**
 * RoleList is a collection of Roles
 *
 * @schema io.k8s.api.rbac.v1alpha1.RoleList
 */
class KubeRoleListV1Alpha1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.rbac.v1alpha1.RoleList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeRoleListV1Alpha1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1alpha1.RoleList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeRoleListV1Alpha1.GVK), props);
    }
}
exports.KubeRoleListV1Alpha1 = KubeRoleListV1Alpha1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.rbac.v1alpha1.RoleList"
 */
KubeRoleListV1Alpha1.GVK = {
    apiVersion: 'rbac.authorization.k8s.io/v1alpha1',
    kind: 'RoleList',
};
/**
 * ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
 *
 * @schema io.k8s.api.rbac.v1beta1.ClusterRole
 */
class KubeClusterRoleV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.rbac.v1beta1.ClusterRole" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeClusterRoleV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1beta1.ClusterRole".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeClusterRoleV1Beta1.GVK), props);
    }
}
exports.KubeClusterRoleV1Beta1 = KubeClusterRoleV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.rbac.v1beta1.ClusterRole"
 */
KubeClusterRoleV1Beta1.GVK = {
    apiVersion: 'rbac.authorization.k8s.io/v1beta1',
    kind: 'ClusterRole',
};
/**
 * ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.
 *
 * @schema io.k8s.api.rbac.v1beta1.ClusterRoleBinding
 */
class KubeClusterRoleBindingV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.rbac.v1beta1.ClusterRoleBinding" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeClusterRoleBindingV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1beta1.ClusterRoleBinding".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeClusterRoleBindingV1Beta1.GVK), props);
    }
}
exports.KubeClusterRoleBindingV1Beta1 = KubeClusterRoleBindingV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.rbac.v1beta1.ClusterRoleBinding"
 */
KubeClusterRoleBindingV1Beta1.GVK = {
    apiVersion: 'rbac.authorization.k8s.io/v1beta1',
    kind: 'ClusterRoleBinding',
};
/**
 * ClusterRoleBindingList is a collection of ClusterRoleBindings
 *
 * @schema io.k8s.api.rbac.v1beta1.ClusterRoleBindingList
 */
class KubeClusterRoleBindingListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.rbac.v1beta1.ClusterRoleBindingList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeClusterRoleBindingListV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1beta1.ClusterRoleBindingList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeClusterRoleBindingListV1Beta1.GVK), props);
    }
}
exports.KubeClusterRoleBindingListV1Beta1 = KubeClusterRoleBindingListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.rbac.v1beta1.ClusterRoleBindingList"
 */
KubeClusterRoleBindingListV1Beta1.GVK = {
    apiVersion: 'rbac.authorization.k8s.io/v1beta1',
    kind: 'ClusterRoleBindingList',
};
/**
 * ClusterRoleList is a collection of ClusterRoles
 *
 * @schema io.k8s.api.rbac.v1beta1.ClusterRoleList
 */
class KubeClusterRoleListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.rbac.v1beta1.ClusterRoleList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeClusterRoleListV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1beta1.ClusterRoleList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeClusterRoleListV1Beta1.GVK), props);
    }
}
exports.KubeClusterRoleListV1Beta1 = KubeClusterRoleListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.rbac.v1beta1.ClusterRoleList"
 */
KubeClusterRoleListV1Beta1.GVK = {
    apiVersion: 'rbac.authorization.k8s.io/v1beta1',
    kind: 'ClusterRoleList',
};
/**
 * Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.
 *
 * @schema io.k8s.api.rbac.v1beta1.Role
 */
class KubeRoleV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.rbac.v1beta1.Role" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeRoleV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1beta1.Role".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeRoleV1Beta1.GVK), props);
    }
}
exports.KubeRoleV1Beta1 = KubeRoleV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.rbac.v1beta1.Role"
 */
KubeRoleV1Beta1.GVK = {
    apiVersion: 'rbac.authorization.k8s.io/v1beta1',
    kind: 'Role',
};
/**
 * RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace.
 *
 * @schema io.k8s.api.rbac.v1beta1.RoleBinding
 */
class KubeRoleBindingV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.rbac.v1beta1.RoleBinding" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeRoleBindingV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1beta1.RoleBinding".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeRoleBindingV1Beta1.GVK), props);
    }
}
exports.KubeRoleBindingV1Beta1 = KubeRoleBindingV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.rbac.v1beta1.RoleBinding"
 */
KubeRoleBindingV1Beta1.GVK = {
    apiVersion: 'rbac.authorization.k8s.io/v1beta1',
    kind: 'RoleBinding',
};
/**
 * RoleBindingList is a collection of RoleBindings
 *
 * @schema io.k8s.api.rbac.v1beta1.RoleBindingList
 */
class KubeRoleBindingListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.rbac.v1beta1.RoleBindingList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeRoleBindingListV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1beta1.RoleBindingList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeRoleBindingListV1Beta1.GVK), props);
    }
}
exports.KubeRoleBindingListV1Beta1 = KubeRoleBindingListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.rbac.v1beta1.RoleBindingList"
 */
KubeRoleBindingListV1Beta1.GVK = {
    apiVersion: 'rbac.authorization.k8s.io/v1beta1',
    kind: 'RoleBindingList',
};
/**
 * RoleList is a collection of Roles
 *
 * @schema io.k8s.api.rbac.v1beta1.RoleList
 */
class KubeRoleListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.rbac.v1beta1.RoleList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeRoleListV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1beta1.RoleList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeRoleListV1Beta1.GVK), props);
    }
}
exports.KubeRoleListV1Beta1 = KubeRoleListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.rbac.v1beta1.RoleList"
 */
KubeRoleListV1Beta1.GVK = {
    apiVersion: 'rbac.authorization.k8s.io/v1beta1',
    kind: 'RoleList',
};
/**
 * PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer.
 *
 * @schema io.k8s.api.scheduling.v1.PriorityClass
 */
class KubePriorityClass extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.scheduling.v1.PriorityClass" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubePriorityClass.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.scheduling.v1.PriorityClass".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubePriorityClass.GVK), props);
    }
}
exports.KubePriorityClass = KubePriorityClass;
/**
 * Returns the apiVersion and kind for "io.k8s.api.scheduling.v1.PriorityClass"
 */
KubePriorityClass.GVK = {
    apiVersion: 'scheduling.k8s.io/v1',
    kind: 'PriorityClass',
};
/**
 * PriorityClassList is a collection of priority classes.
 *
 * @schema io.k8s.api.scheduling.v1.PriorityClassList
 */
class KubePriorityClassList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.scheduling.v1.PriorityClassList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubePriorityClassList.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.scheduling.v1.PriorityClassList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubePriorityClassList.GVK), props);
    }
}
exports.KubePriorityClassList = KubePriorityClassList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.scheduling.v1.PriorityClassList"
 */
KubePriorityClassList.GVK = {
    apiVersion: 'scheduling.k8s.io/v1',
    kind: 'PriorityClassList',
};
/**
 * DEPRECATED - This group version of PriorityClass is deprecated by scheduling.k8s.io/v1/PriorityClass. PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer.
 *
 * @schema io.k8s.api.scheduling.v1alpha1.PriorityClass
 */
class KubePriorityClassV1Alpha1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.scheduling.v1alpha1.PriorityClass" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubePriorityClassV1Alpha1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.scheduling.v1alpha1.PriorityClass".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubePriorityClassV1Alpha1.GVK), props);
    }
}
exports.KubePriorityClassV1Alpha1 = KubePriorityClassV1Alpha1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.scheduling.v1alpha1.PriorityClass"
 */
KubePriorityClassV1Alpha1.GVK = {
    apiVersion: 'scheduling.k8s.io/v1alpha1',
    kind: 'PriorityClass',
};
/**
 * PriorityClassList is a collection of priority classes.
 *
 * @schema io.k8s.api.scheduling.v1alpha1.PriorityClassList
 */
class KubePriorityClassListV1Alpha1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.scheduling.v1alpha1.PriorityClassList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubePriorityClassListV1Alpha1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.scheduling.v1alpha1.PriorityClassList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubePriorityClassListV1Alpha1.GVK), props);
    }
}
exports.KubePriorityClassListV1Alpha1 = KubePriorityClassListV1Alpha1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.scheduling.v1alpha1.PriorityClassList"
 */
KubePriorityClassListV1Alpha1.GVK = {
    apiVersion: 'scheduling.k8s.io/v1alpha1',
    kind: 'PriorityClassList',
};
/**
 * DEPRECATED - This group version of PriorityClass is deprecated by scheduling.k8s.io/v1/PriorityClass. PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer.
 *
 * @schema io.k8s.api.scheduling.v1beta1.PriorityClass
 */
class KubePriorityClassV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.scheduling.v1beta1.PriorityClass" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubePriorityClassV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.scheduling.v1beta1.PriorityClass".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubePriorityClassV1Beta1.GVK), props);
    }
}
exports.KubePriorityClassV1Beta1 = KubePriorityClassV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.scheduling.v1beta1.PriorityClass"
 */
KubePriorityClassV1Beta1.GVK = {
    apiVersion: 'scheduling.k8s.io/v1beta1',
    kind: 'PriorityClass',
};
/**
 * PriorityClassList is a collection of priority classes.
 *
 * @schema io.k8s.api.scheduling.v1beta1.PriorityClassList
 */
class KubePriorityClassListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.scheduling.v1beta1.PriorityClassList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubePriorityClassListV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.scheduling.v1beta1.PriorityClassList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubePriorityClassListV1Beta1.GVK), props);
    }
}
exports.KubePriorityClassListV1Beta1 = KubePriorityClassListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.scheduling.v1beta1.PriorityClassList"
 */
KubePriorityClassListV1Beta1.GVK = {
    apiVersion: 'scheduling.k8s.io/v1beta1',
    kind: 'PriorityClassList',
};
/**
 * PodPreset is a policy resource that defines additional runtime requirements for a Pod.
 *
 * @schema io.k8s.api.settings.v1alpha1.PodPreset
 */
class KubePodPresetV1Alpha1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.settings.v1alpha1.PodPreset" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubePodPresetV1Alpha1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.settings.v1alpha1.PodPreset".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubePodPresetV1Alpha1.GVK), props);
    }
}
exports.KubePodPresetV1Alpha1 = KubePodPresetV1Alpha1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.settings.v1alpha1.PodPreset"
 */
KubePodPresetV1Alpha1.GVK = {
    apiVersion: 'settings.k8s.io/v1alpha1',
    kind: 'PodPreset',
};
/**
 * PodPresetList is a list of PodPreset objects.
 *
 * @schema io.k8s.api.settings.v1alpha1.PodPresetList
 */
class KubePodPresetListV1Alpha1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.settings.v1alpha1.PodPresetList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubePodPresetListV1Alpha1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.settings.v1alpha1.PodPresetList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubePodPresetListV1Alpha1.GVK), props);
    }
}
exports.KubePodPresetListV1Alpha1 = KubePodPresetListV1Alpha1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.settings.v1alpha1.PodPresetList"
 */
KubePodPresetListV1Alpha1.GVK = {
    apiVersion: 'settings.k8s.io/v1alpha1',
    kind: 'PodPresetList',
};
/**
 * StorageClass describes the parameters for a class of storage for which PersistentVolumes can be dynamically provisioned.

StorageClasses are non-namespaced; the name of the storage class according to etcd is in ObjectMeta.Name.
 *
 * @schema io.k8s.api.storage.v1.StorageClass
 */
class KubeStorageClass extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.storage.v1.StorageClass" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeStorageClass.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.storage.v1.StorageClass".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeStorageClass.GVK), props);
    }
}
exports.KubeStorageClass = KubeStorageClass;
/**
 * Returns the apiVersion and kind for "io.k8s.api.storage.v1.StorageClass"
 */
KubeStorageClass.GVK = {
    apiVersion: 'storage.k8s.io/v1',
    kind: 'StorageClass',
};
/**
 * StorageClassList is a collection of storage classes.
 *
 * @schema io.k8s.api.storage.v1.StorageClassList
 */
class KubeStorageClassList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.storage.v1.StorageClassList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeStorageClassList.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.storage.v1.StorageClassList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeStorageClassList.GVK), props);
    }
}
exports.KubeStorageClassList = KubeStorageClassList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.storage.v1.StorageClassList"
 */
KubeStorageClassList.GVK = {
    apiVersion: 'storage.k8s.io/v1',
    kind: 'StorageClassList',
};
/**
 * VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.

VolumeAttachment objects are non-namespaced.
 *
 * @schema io.k8s.api.storage.v1.VolumeAttachment
 */
class KubeVolumeAttachment extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.storage.v1.VolumeAttachment" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeVolumeAttachment.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.storage.v1.VolumeAttachment".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeVolumeAttachment.GVK), props);
    }
}
exports.KubeVolumeAttachment = KubeVolumeAttachment;
/**
 * Returns the apiVersion and kind for "io.k8s.api.storage.v1.VolumeAttachment"
 */
KubeVolumeAttachment.GVK = {
    apiVersion: 'storage.k8s.io/v1',
    kind: 'VolumeAttachment',
};
/**
 * VolumeAttachmentList is a collection of VolumeAttachment objects.
 *
 * @schema io.k8s.api.storage.v1.VolumeAttachmentList
 */
class KubeVolumeAttachmentList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.storage.v1.VolumeAttachmentList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeVolumeAttachmentList.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.storage.v1.VolumeAttachmentList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeVolumeAttachmentList.GVK), props);
    }
}
exports.KubeVolumeAttachmentList = KubeVolumeAttachmentList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.storage.v1.VolumeAttachmentList"
 */
KubeVolumeAttachmentList.GVK = {
    apiVersion: 'storage.k8s.io/v1',
    kind: 'VolumeAttachmentList',
};
/**
 * VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.

VolumeAttachment objects are non-namespaced.
 *
 * @schema io.k8s.api.storage.v1alpha1.VolumeAttachment
 */
class KubeVolumeAttachmentV1Alpha1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.storage.v1alpha1.VolumeAttachment" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeVolumeAttachmentV1Alpha1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.storage.v1alpha1.VolumeAttachment".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeVolumeAttachmentV1Alpha1.GVK), props);
    }
}
exports.KubeVolumeAttachmentV1Alpha1 = KubeVolumeAttachmentV1Alpha1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.storage.v1alpha1.VolumeAttachment"
 */
KubeVolumeAttachmentV1Alpha1.GVK = {
    apiVersion: 'storage.k8s.io/v1alpha1',
    kind: 'VolumeAttachment',
};
/**
 * VolumeAttachmentList is a collection of VolumeAttachment objects.
 *
 * @schema io.k8s.api.storage.v1alpha1.VolumeAttachmentList
 */
class KubeVolumeAttachmentListV1Alpha1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.storage.v1alpha1.VolumeAttachmentList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeVolumeAttachmentListV1Alpha1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.storage.v1alpha1.VolumeAttachmentList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeVolumeAttachmentListV1Alpha1.GVK), props);
    }
}
exports.KubeVolumeAttachmentListV1Alpha1 = KubeVolumeAttachmentListV1Alpha1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.storage.v1alpha1.VolumeAttachmentList"
 */
KubeVolumeAttachmentListV1Alpha1.GVK = {
    apiVersion: 'storage.k8s.io/v1alpha1',
    kind: 'VolumeAttachmentList',
};
/**
 * CSIDriver captures information about a Container Storage Interface (CSI) volume driver deployed on the cluster. CSI drivers do not need to create the CSIDriver object directly. Instead they may use the cluster-driver-registrar sidecar container. When deployed with a CSI driver it automatically creates a CSIDriver object representing the driver. Kubernetes attach detach controller uses this object to determine whether attach is required. Kubelet uses this object to determine whether pod information needs to be passed on mount. CSIDriver objects are non-namespaced.
 *
 * @schema io.k8s.api.storage.v1beta1.CSIDriver
 */
class KubeCsiDriverV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.storage.v1beta1.CSIDriver" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeCsiDriverV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.storage.v1beta1.CSIDriver".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeCsiDriverV1Beta1.GVK), props);
    }
}
exports.KubeCsiDriverV1Beta1 = KubeCsiDriverV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.storage.v1beta1.CSIDriver"
 */
KubeCsiDriverV1Beta1.GVK = {
    apiVersion: 'storage.k8s.io/v1beta1',
    kind: 'CSIDriver',
};
/**
 * CSIDriverList is a collection of CSIDriver objects.
 *
 * @schema io.k8s.api.storage.v1beta1.CSIDriverList
 */
class KubeCsiDriverListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.storage.v1beta1.CSIDriverList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeCsiDriverListV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.storage.v1beta1.CSIDriverList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeCsiDriverListV1Beta1.GVK), props);
    }
}
exports.KubeCsiDriverListV1Beta1 = KubeCsiDriverListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.storage.v1beta1.CSIDriverList"
 */
KubeCsiDriverListV1Beta1.GVK = {
    apiVersion: 'storage.k8s.io/v1beta1',
    kind: 'CSIDriverList',
};
/**
 * CSINode holds information about all CSI drivers installed on a node. CSI drivers do not need to create the CSINode object directly. As long as they use the node-driver-registrar sidecar container, the kubelet will automatically populate the CSINode object for the CSI driver as part of kubelet plugin registration. CSINode has the same name as a node. If the object is missing, it means either there are no CSI Drivers available on the node, or the Kubelet version is low enough that it doesn't create this object. CSINode has an OwnerReference that points to the corresponding node object.
 *
 * @schema io.k8s.api.storage.v1beta1.CSINode
 */
class KubeCsiNodeV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.storage.v1beta1.CSINode" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeCsiNodeV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.storage.v1beta1.CSINode".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeCsiNodeV1Beta1.GVK), props);
    }
}
exports.KubeCsiNodeV1Beta1 = KubeCsiNodeV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.storage.v1beta1.CSINode"
 */
KubeCsiNodeV1Beta1.GVK = {
    apiVersion: 'storage.k8s.io/v1beta1',
    kind: 'CSINode',
};
/**
 * CSINodeList is a collection of CSINode objects.
 *
 * @schema io.k8s.api.storage.v1beta1.CSINodeList
 */
class KubeCsiNodeListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.storage.v1beta1.CSINodeList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeCsiNodeListV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.storage.v1beta1.CSINodeList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeCsiNodeListV1Beta1.GVK), props);
    }
}
exports.KubeCsiNodeListV1Beta1 = KubeCsiNodeListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.storage.v1beta1.CSINodeList"
 */
KubeCsiNodeListV1Beta1.GVK = {
    apiVersion: 'storage.k8s.io/v1beta1',
    kind: 'CSINodeList',
};
/**
 * StorageClass describes the parameters for a class of storage for which PersistentVolumes can be dynamically provisioned.

StorageClasses are non-namespaced; the name of the storage class according to etcd is in ObjectMeta.Name.
 *
 * @schema io.k8s.api.storage.v1beta1.StorageClass
 */
class KubeStorageClassV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.storage.v1beta1.StorageClass" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeStorageClassV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.storage.v1beta1.StorageClass".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeStorageClassV1Beta1.GVK), props);
    }
}
exports.KubeStorageClassV1Beta1 = KubeStorageClassV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.storage.v1beta1.StorageClass"
 */
KubeStorageClassV1Beta1.GVK = {
    apiVersion: 'storage.k8s.io/v1beta1',
    kind: 'StorageClass',
};
/**
 * StorageClassList is a collection of storage classes.
 *
 * @schema io.k8s.api.storage.v1beta1.StorageClassList
 */
class KubeStorageClassListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.storage.v1beta1.StorageClassList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeStorageClassListV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.storage.v1beta1.StorageClassList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeStorageClassListV1Beta1.GVK), props);
    }
}
exports.KubeStorageClassListV1Beta1 = KubeStorageClassListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.storage.v1beta1.StorageClassList"
 */
KubeStorageClassListV1Beta1.GVK = {
    apiVersion: 'storage.k8s.io/v1beta1',
    kind: 'StorageClassList',
};
/**
 * VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.

VolumeAttachment objects are non-namespaced.
 *
 * @schema io.k8s.api.storage.v1beta1.VolumeAttachment
 */
class KubeVolumeAttachmentV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.storage.v1beta1.VolumeAttachment" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeVolumeAttachmentV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.storage.v1beta1.VolumeAttachment".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeVolumeAttachmentV1Beta1.GVK), props);
    }
}
exports.KubeVolumeAttachmentV1Beta1 = KubeVolumeAttachmentV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.storage.v1beta1.VolumeAttachment"
 */
KubeVolumeAttachmentV1Beta1.GVK = {
    apiVersion: 'storage.k8s.io/v1beta1',
    kind: 'VolumeAttachment',
};
/**
 * VolumeAttachmentList is a collection of VolumeAttachment objects.
 *
 * @schema io.k8s.api.storage.v1beta1.VolumeAttachmentList
 */
class KubeVolumeAttachmentListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.storage.v1beta1.VolumeAttachmentList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeVolumeAttachmentListV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.storage.v1beta1.VolumeAttachmentList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeVolumeAttachmentListV1Beta1.GVK), props);
    }
}
exports.KubeVolumeAttachmentListV1Beta1 = KubeVolumeAttachmentListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.storage.v1beta1.VolumeAttachmentList"
 */
KubeVolumeAttachmentListV1Beta1.GVK = {
    apiVersion: 'storage.k8s.io/v1beta1',
    kind: 'VolumeAttachmentList',
};
/**
 * CustomResourceDefinition represents a resource that should be exposed on the API server.  Its name MUST be in the format <.spec.name>.<.spec.group>.
 *
 * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinition
 */
class KubeCustomResourceDefinitionV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinition" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeCustomResourceDefinitionV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinition".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeCustomResourceDefinitionV1Beta1.GVK), props);
    }
}
exports.KubeCustomResourceDefinitionV1Beta1 = KubeCustomResourceDefinitionV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinition"
 */
KubeCustomResourceDefinitionV1Beta1.GVK = {
    apiVersion: 'apiextensions.k8s.io/v1beta1',
    kind: 'CustomResourceDefinition',
};
/**
 * CustomResourceDefinitionList is a list of CustomResourceDefinition objects.
 *
 * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionList
 */
class KubeCustomResourceDefinitionListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeCustomResourceDefinitionListV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeCustomResourceDefinitionListV1Beta1.GVK), props);
    }
}
exports.KubeCustomResourceDefinitionListV1Beta1 = KubeCustomResourceDefinitionListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionList"
 */
KubeCustomResourceDefinitionListV1Beta1.GVK = {
    apiVersion: 'apiextensions.k8s.io/v1beta1',
    kind: 'CustomResourceDefinitionList',
};
/**
 * Status is a return value for calls that don't return other objects.
 *
 * @schema io.k8s.apimachinery.pkg.apis.meta.v1.Status
 */
class KubeStatus extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.apimachinery.pkg.apis.meta.v1.Status" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeStatus.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.apimachinery.pkg.apis.meta.v1.Status".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeStatus.GVK), props);
    }
}
exports.KubeStatus = KubeStatus;
/**
 * Returns the apiVersion and kind for "io.k8s.apimachinery.pkg.apis.meta.v1.Status"
 */
KubeStatus.GVK = {
    apiVersion: 'v1',
    kind: 'Status',
};
/**
 * APIService represents a server for a particular GroupVersion. Name must be "version.group".
 *
 * @schema io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIService
 */
class KubeApiService extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIService" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeApiService.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIService".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeApiService.GVK), props);
    }
}
exports.KubeApiService = KubeApiService;
/**
 * Returns the apiVersion and kind for "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIService"
 */
KubeApiService.GVK = {
    apiVersion: 'apiregistration.k8s.io/v1',
    kind: 'APIService',
};
/**
 * APIServiceList is a list of APIService objects.
 *
 * @schema io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIServiceList
 */
class KubeApiServiceList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIServiceList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeApiServiceList.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIServiceList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeApiServiceList.GVK), props);
    }
}
exports.KubeApiServiceList = KubeApiServiceList;
/**
 * Returns the apiVersion and kind for "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIServiceList"
 */
KubeApiServiceList.GVK = {
    apiVersion: 'apiregistration.k8s.io/v1',
    kind: 'APIServiceList',
};
/**
 * APIService represents a server for a particular GroupVersion. Name must be "version.group".
 *
 * @schema io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1.APIService
 */
class KubeApiServiceV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1.APIService" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, KubeApiServiceV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1.APIService".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeApiServiceV1Beta1.GVK), props);
    }
}
exports.KubeApiServiceV1Beta1 = KubeApiServiceV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1.APIService"
 */
KubeApiServiceV1Beta1.GVK = {
    apiVersion: 'apiregistration.k8s.io/v1beta1',
    kind: 'APIService',
};
/**
 * APIServiceList is a list of APIService objects.
 *
 * @schema io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1.APIServiceList
 */
class KubeApiServiceListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1.APIServiceList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, KubeApiServiceListV1Beta1.manifest(props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1.APIServiceList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeApiServiceListV1Beta1.GVK), props);
    }
}
exports.KubeApiServiceListV1Beta1 = KubeApiServiceListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1.APIServiceList"
 */
KubeApiServiceListV1Beta1.GVK = {
    apiVersion: 'apiregistration.k8s.io/v1beta1',
    kind: 'APIServiceList',
};
/**
 * @schema io.k8s.apimachinery.pkg.api.resource.Quantity
 */
class Quantity {
    static fromString(value) {
        return new Quantity(value);
    }
    static fromNumber(value) {
        return new Quantity(value);
    }
    constructor(value) {
        Object.defineProperty(this, 'resolve', { value: () => value });
    }
}
exports.Quantity = Quantity;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
 *
 * @schema IoK8SApimachineryPkgApisMetaV1DeleteOptionsKind
 */
var IoK8SApimachineryPkgApisMetaV1DeleteOptionsKind;
(function (IoK8SApimachineryPkgApisMetaV1DeleteOptionsKind) {
    /** DeleteOptions */
    IoK8SApimachineryPkgApisMetaV1DeleteOptionsKind["DELETE_OPTIONS"] = "DeleteOptions";
})(IoK8SApimachineryPkgApisMetaV1DeleteOptionsKind = exports.IoK8SApimachineryPkgApisMetaV1DeleteOptionsKind || (exports.IoK8SApimachineryPkgApisMetaV1DeleteOptionsKind = {}));
/**
 * @schema io.k8s.apimachinery.pkg.util.intstr.IntOrString
 */
class IntOrString {
    static fromString(value) {
        return new IntOrString(value);
    }
    static fromNumber(value) {
        return new IntOrString(value);
    }
    constructor(value) {
        Object.defineProperty(this, 'resolve', { value: () => value });
    }
}
exports.IntOrString = IntOrString;
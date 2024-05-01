export enum ApplicationType {
  home = "home",
  Teams = "teams",
  Chat = "chat",
  Mail = "mail",
}

export namespace ApplicationType {

  export function getApplicationTypeFromString(applicationTypeString: string): ApplicationType {
    switch (applicationTypeString) {
      case ApplicationType.home:
        return ApplicationType.home;
      case ApplicationType.Teams:
        return ApplicationType.Teams;
      case ApplicationType.Chat:
        return ApplicationType.Chat;
      case ApplicationType.Mail:
        return ApplicationType.Mail;
      default:
        throw ('Unknown Type');
    }
  }
}



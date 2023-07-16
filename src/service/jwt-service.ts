import jwt, {JwtPayload} from 'jsonwebtoken'
import {config} from "../config/config";
import {TokenDto} from "../entity/dto/token/token-dto";

class JwtService {
  public generateTokens(token: TokenDto): {
    accessToken: string,
    refreshToken: string
  } {
    const accessToken: string = jwt.sign(
        {...token},
        config.server.jwt.accessSecret,
        {expiresIn: config.server.jwt.expiresInAccess});
    const refreshToken: string = jwt.sign(
        {...token},
        config.server.jwt.refreshSecret,
        {expiresIn: config.server.jwt.expiresInRefresh});
    return {
      accessToken,
      refreshToken
    }
  }

  public validateAccessToken(token: string): JwtPayload | string | null {
    return this.validateToken(token, config.server.jwt.accessSecret);
  }

  public validateRefreshToken(token: string): JwtPayload | string | null {
    return this.validateToken(token, config.server.jwt.refreshSecret);
  }

  private validateToken(
      token: string, secret: string): JwtPayload | string | null {
    try {
      return jwt.verify(token, secret);
    } catch (e) {
      return null;
    }
  }
}

export default new JwtService();